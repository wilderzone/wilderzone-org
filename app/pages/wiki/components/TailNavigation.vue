<script setup lang="ts">
import type { PageCollections } from '@nuxt/content';

const props = defineProps<{
	collection: keyof PageCollections;
	root: string;
}>();

const { prev, next } = useSectionNavigation(props.collection, () => props.root);
</script>

<template>
	<nav class="tail-navigation">
		<NuxtLink v-if="prev" :to="prev.path" class="previous">
			<p>Previous page</p>
			<p>{{ prev.path === root ? 'Overview' : prev.title }}</p>
		</NuxtLink>
		<NuxtLink v-if="next" :to="next.path" class="next">
			<p>Next page</p>
			<p>{{ next.path === root ? 'Overview' : next.title }}</p>
		</NuxtLink>
	</nav>
</template>

<style scoped>
.tail-navigation {
	grid-area: tail;
	display: flex;
	justify-content: space-between;
	gap: var(--gap-m);
	margin: var(--gap-xl) 0 var(--gap-m);
	padding-inline: var(--gap-xl);

	& a {
		display: flex;
		flex-flow: column nowrap;
		gap: var(--gap-s);
		width: 50%;
		padding: var(--gap-m);
		color: var(--color-orange);
		text-decoration: none;
		border: 1px solid var(--color-border);
		border-radius: var(--border-radius-m);
		transition: var(--transition-s) ease border-color;

		&.previous {
			align-items: flex-start;
		}

		&.next {
			align-items: flex-end;
			margin-left: auto;
		}

		&:is(:focus-visible, :hover) {
			border-color: var(--color-orange);
		}

		& p {
			margin: 0;

			&:first-of-type {
				color: var(--color-text-dim);
				font-size: var(--font-size-s);
			}
		}
	}
}
</style>
