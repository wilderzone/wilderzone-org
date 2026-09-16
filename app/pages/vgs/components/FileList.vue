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
				<VgsComponentsFile
					v-if="option.type === 'line'"
					:cdn
					:command
					:option
					:pack
				/>
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
}
</style>
