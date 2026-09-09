<script setup lang="ts">
import { vgsOptions } from '~/data/vgs';

const props = defineProps<{
	cdn: string;
	pack: string;
}>();

const emit = defineEmits<{
	play: [string];
}>();

const lines = Object.entries(vgsOptions);

function link(file: string): string {
	return `${props.cdn}/${props.pack}/${file}.ogg`;
}

function share(command: string): string {
	return `https://wilderzone.org/VGS?pack=${props.pack}&line=${command}`;
}
</script>

<template>
	<section class="files">
		<h3>
			<span>Voice Lines</span>
			<IconLink
				href="https://tribes.fandom.com/wiki/Voice_Game_System"
				icon="ic:round-info"
				title="About VGS"
				external
			/>
		</h3>
		<ul aria-label="All voice lines">
			<template
				v-for="[command, option] of lines"
				:key="command"
			>
				<li
					v-if="option.type === 'category'"
					class="category"
					:aria-label="command"
				>
					<span class="tag" aria-hidden="true">{{ command }}</span>
					<span>{{ option.phrase || option.name }}</span>
				</li>
				<li
					v-if="option.type === 'line'"
					class="file"
					:aria-label="command"
				>
					<IconButton
						icon="material-symbols:play-arrow-rounded"
						title="Play"
						@click="option.file && emit('play', option.file)"
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
		</ul>
	</section>
</template>

<style scoped>
section.files {
	& h3 {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--gap-l);
		border-bottom: 1px solid var(--color-border);
	}

	& ul {
		display: flex;
		flex-flow: column nowrap;
		gap: var(--gap-m);
		margin: 0;
		padding: 0 var(--gap-s);
		list-style: none;
		overflow-y: auto;
		scrollbar-color: #8b8b8b transparent;
	}

	& .category {
		position: sticky;
		top: 0;
		z-index: 1;
		display: flex;
		align-items: center;
		gap: var(--gap-m);
		padding: var(--gap-s);
		background: var(--color-background);
	}

	& .file {
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
}
</style>
