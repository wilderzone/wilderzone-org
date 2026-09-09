<script setup lang="ts">
import { VGS, type VGSMatch } from '@wilderzone/vgs';
import { vgsOptions, vgsPacks } from '~/data/vgs';

const cdn = 'https://cdn.wilderzone.org/ta/voicepacks';
const defaultPack = vgsPacks.find(pack => pack.default)?.pack || '';
const history = ref<VGSMatch[]>([]);
const options = ref<VGSMatch[]>([]);
const pack = ref(defaultPack);
const pressed = ref('');
const route = useRoute();
const shared = computed(() => {
	const line = typeof route.query.line === 'string' && route.query.line.toUpperCase() || '';
	const option = vgsOptions[line];
	if (option) {
		return { line, option, pack: pack.value };
	}
});
const sounds: HTMLAudioElement[] = [];
const timeout = 3_000;
const timer = ref();
const vgs = new VGS({ timeout, trigger: ['V', 'A'], options: vgsOptions });

function ignoreEvent(event: KeyboardEvent): boolean {
	return !/(?:^[a-z]$|^escape$)/i.test(event.key);
}

function onKeydown(event: KeyboardEvent): void {
	if (ignoreEvent(event)) return;
	pressed.value = event.key.toLowerCase();
}

function onKeyup(event: KeyboardEvent): void {
	if (ignoreEvent(event)) return;
	pressed.value = '';
	vgs.press(event.key);
}

function onSelect(key: string): void {
	vgs.press(key);
}

function onMatch(match: VGSMatch): void {
	if (!match.file) return;
	history.value.unshift(match);
	timer.value?.disable();
	stop();
	void play(pack.value, match.file);
}

function onOptions(o: VGSMatch[]): void {
	options.value = o;
	timer.value?.restart();
}

function onCancel(): void {
	timer.value?.disable();
}

function onTrigger(): void {
	timer.value?.enable();
}

function link(pack: string, file: string): string {
	return `${cdn}/${pack}/${file}.ogg`;
}

function play(pack: string, file: string): void {
	const audio = document.createElement('audio');
	audio.src = link(pack, file);
	sounds.push(audio);
	void audio.play();
}

function stop(): void {
	for (const sound of sounds) {
		sound.pause();
	}
	sounds.length = 0;
}

watch(
	() => route.query.pack,
	value => {
		const queryPack = typeof value === 'string' && value.toLowerCase();
		const match = vgsPacks.find(({ pack }) => pack.toLowerCase() === queryPack);
		if (match) {
			pack.value = match.pack; 
		}
	},
	{ immediate: true }
)

onMounted(() => {
	vgs.on('cancel', onCancel);
	vgs.on('timeout', onCancel);
	vgs.on('options', onOptions);
	vgs.on('options', onOptions);
	vgs.on('trigger', onTrigger);
	vgs.on('match', onMatch);
	window.addEventListener('keydown', onKeydown);
	window.addEventListener('keyup', onKeyup);
});
</script>

<template>
	<NavBar />
	<main>
		<div class="vgs" :class="{ shared }">
			<h2><div>VGS</div></h2>

			<template v-if="shared">
				<VgsComponentsShared
					v-grid:shared
					:cdn
					:command="shared.line"
					:line="shared.option"
					:pack="shared.pack"
					@play="play"
				/>
			</template>

			<template v-else>
				<VgsComponentsPalette
					v-grid:palette
					:options
					:pressed
					:timeout
					v-model="pack"
					@select="onSelect"
				>
					<VgsComponentsTimerBar ref="timer" :duration="timeout" />
				</VgsComponentsPalette>
	
				<VgsComponentsHistory
					v-grid:history
					:history
				/>
	
				<VgsComponentsFileList
					v-grid:files
					:cdn
					:pack="pack"
					@play="play(pack, $event)"
				/>
			</template>
		</div>
	</main>
	<Footer />
</template>

<style scoped>
.vgs {
	--heading-height: calc(var(--gap-l) * 3.75);
	display: grid;
	grid-template:
		'heading   heading' var(--heading-height)
		'palette   history' 30em
		'files     files  ' 30em
		/ 3fr      2fr;
	place-items: center;
	gap: var(--gap-m);
	max-width: var(--content-width);
	height: 100%;
	margin: auto;
	padding: calc(var(--gap-l) * 2) var(--gap-m) calc(var(--gap-l) * 3);
	font-family: 'Play', sans-serif;

	&.shared {
		grid-template:
			'heading' var(--heading-height)
			'shared ' auto
			/ 1fr;
		max-width: 30em;
	}

	& h2 {
		grid-area: heading;
		align-self: flex-start;
		width: 100%;
		height: 100%;
		margin: 0;
		font-size: calc(var(--gap-l) * 8);
		line-height: 1em;
		text-align: center;
		opacity: 0.1;
		overflow: hidden;

		& div {
			transform: translateY(-0.16em);
		}
	}

	&:deep(h3) {
		margin: 0;
		padding: var(--gap-xs) var(--gap-s);
		color: var(--color-text-dim);
	}

	&:deep(.tag) {
		min-width: 7ch;
		padding: var(--gap-xs);
		font-size: var(--font-size-s);
		letter-spacing: 0.1ch;
		text-align: center;
		background: #8886;
		border-radius: var(--border-radius-s);
	}

	&:deep(section) {
		display: flex;
		flex-flow: column nowrap;
		gap: var(--gap-s);
		width: 100%;
		height: 100%;
		padding: var(--gap-s);
		border-radius: var(--border-radius-m);
	}
}

@media only screen and (max-width: 700px) {
	.vgs {
		grid-template:
			'heading' var(--heading-height)
			'palette' 30em
			'history' 20em
			'files  ' 30em
			/ 1fr;
	}
}
</style>
