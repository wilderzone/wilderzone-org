<script setup lang="ts">
import type { VGSOption } from '@wilderzone/vgs';

const props = defineProps<{
	cdn: string;
	command: string;
	line: VGSOption;
	pack: string;
}>();

const emit = defineEmits<{
	play: [string, string];
}>();

function link(file: string): string {
	return `${props.cdn}/${props.pack}/${file}.ogg`;
}
</script>

<template>
	<section class="shared">
		<h3>Shared Voice Line</h3>
		<p class="voice-line">
			<span class="tag">{{ props.command }}</span>
			<span>{{ props.line.phrase || props.line.name }}</span>
		</p>
		<IconButton
			icon="material-symbols:play-arrow"
			class="play-button"
			title="Play"
			@click="props.line.file && emit('play', props.pack, props.line.file)"
		/>
		<NuxtLink
			to="/vgs"
			class="back"
			title="Return to the full VGS player"
		>
			<Icon name="material-symbols:keyboard-backspace-rounded" />
			Back
		</NuxtLink>
		<a
			v-if="props.line.file"
			:href="link(props.line.file)"
			target="_blank"
			rel="noreferrer"
			class="download"
			title="Download this voice line"
			download
		>
			<Icon name="ic:round-download" />
			Download
		</a>
	</section>
</template>

<style scoped>
section.shared.shared {
	display: grid;
	grid-template:
		'heading  heading ' auto
		'play     play    ' 1fr
		'line     line    ' auto
		'back     download' auto
		/ 1fr     1fr;
	place-items: center;
	gap: var(--gap-m);
	padding: var(--gap-m);
	background: var(--color-card-metal);
	border: 1px solid var(--color-border);
	box-shadow: 0 0 14px -6px #0002;

	& h3 {
		grid-area: heading;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--gap-m);
		width: 100%;
		white-space: nowrap;

		&::after {
			content: '';
			display: block;
			width: 100%;
			height: 1em;
			background-image:
				linear-gradient(to bottom, transparent calc(50% - 1px), currentColor, transparent calc(50% + 1px)),
				linear-gradient(to right, transparent calc(100% - var(--gap-s) - 4px), currentColor, transparent calc(100% - var(--gap-s) - 2px));
			opacity: 0.3;
		}
	}

	& .voice-line {
		grid-area: line;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: var(--gap-s);
		width: 100%;
		margin: 0;
		padding: var(--gap-s);
		font-size: var(--font-size-l);
		background: var(--color-background);
		border-radius: var(--border-radius-s);
	}

	& .play-button {
		grid-area: play;
		width: 100%;
		aspect-ratio: 1;
		font-size: 10em;
		border: 1px solid var(--color-border);
	}

	& .back,
	& .download {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: var(--gap-s);
		width: 100%;
		padding: var(--gap-s);
		color: inherit;
		text-decoration: none;
		border-radius: var(--border-radius-s);
		cursor: pointer;

		&:is(:focus-visible, :hover) {
			background: var(--color-orange-faint);
		}
	}

	& .back {
		grid-area: back;
	}

	& .download {
		grid-area: download;
	}
}
</style>
