<script setup lang="ts">
import type { VGSOption } from '@wilderzone/vgs';

const playSound = inject<(pack: string, file: string) => Promise<void>>('play');

const props = defineProps<{
	cdn: string;
	command: string;
	option: VGSOption;
	pack: string;
}>();

const emit = defineEmits<{
	play: [string];
}>();

const loading = ref(false);

function link(file: string): string {
	return `${props.cdn}/${props.pack}/${file}.ogg`;
}

function share(command: string): string {
	return `https://wilderzone.org/VGS?pack=${props.pack}&line=${command}`;
}

async function play(): Promise<void> {
	if (!playSound || !props.option.file) return;
	loading.value = true;
	await playSound(props.pack, props.option.file)
	loading.value = false;
}
</script>

<template>
	<li
		class="file"
		:aria-label="command"
	>
		<IconButton
			icon="material-symbols:play-arrow-rounded"
			title="Play"
			:loading
			@click="play()"
		/>
		<span class="tag" aria-hidden="true">{{ command }}</span>
		<span>{{ option.phrase || option.name }}</span>
		<ShareButton
			:content="share(command)"
			icon="ic:round-share"
			class="share"
			title="Share"
		/>
		<IconLink
			v-if="option.file"
			:href="link(option.file)"
			icon="ic:round-download"
			title="Download"
			external
			download
		/>
	</li>
</template>

<style scoped>
.file {
	display: flex;
	align-items: center;
	gap: var(--gap-m);
	padding: var(--gap-s);
	background: var(--color-card-metal);
	border-radius: var(--border-radius-s);

	& .share {
		margin-inline-start: auto;
	}
}
</style>
