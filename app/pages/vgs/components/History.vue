<script setup lang="ts">
import type { VGSMatch } from '@wilderzone/vgs';

defineProps<{
	history: VGSMatch[];
}>();
</script>

<template>
	<section class="history" aria-labelledby="history">
		<h3 id="history">History</h3>
		<output>
			<ol>
				<li
					v-for="item of history"
					class="history-item"
					:aria-label="item.command"
				>
					<span class="tag" aria-hidden="true">{{ item.command }}</span>
					<span>{{ item.phrase || item.name }}</span>
				</li>
			</ol>
		</output>
	</section>
</template>

<style scoped>
section.history {
	background: var(--color-card-metal);
	border: 1px solid var(--color-border);
	box-shadow: 0 0 14px -6px #0002;

	& output {
		width: 100%;
		height: 100%;
		background: var(--color-background);
		border: 1px solid var(--color-border);
		border-radius: var(--border-radius-s);
		overflow: hidden auto;
		scrollbar-color: #8b8b8b transparent;
	}

	& ol {
		display: flex;
		flex-flow: column-reverse nowrap;
		gap: var(--gap-xs);
		margin: 0;
		padding: var(--gap-m);
		list-style: none;
	}

	& .history-item {
		display: flex;
		align-items: center;
		gap: var(--gap-s);
		animation: history-item-enter var(--transition-m) ease forwards;
	}
}

@keyframes history-item-enter {
	0%   { opacity: 0; transform: translateX(20px); }
	100% { opacity: 1; transform: translateX(0);    }
}
</style>
