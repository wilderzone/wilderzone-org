<script setup lang="ts">
import type { PageCollections } from '@nuxt/content';

const props = defineProps<{
	collection: keyof PageCollections;
	root: string;
}>();

const { title, items } = useSectionNavigation(props.collection, () => props.root);
</script>

<template>
	<nav class="side-navigation">
		<p>{{ title }}</p>
		<template v-for="item of items" :key="item.path">
			<hr>
			<NuxtLink :to="item.path" class="primary">
				{{ item.path === root ? 'Overview' : item.title }}
			</NuxtLink>
			<NuxtLink
				v-for="child of item.children?.filter((child: typeof item) => child.path !== item.path)"
				:key="child.path"
				:to="child.path"
			>
				{{ child.title }}
			</NuxtLink>
		</template>
	</nav>
</template>

<style scoped>
.side-navigation {
	grid-area: nav;
	position: sticky;
	top: 80px;
	display: flex;
	flex-flow: column nowrap;
	gap: var(--gap-s);
	height: fit-content;
	padding: var(--gap-m);
	font-size: var(--font-size-s);
	background: var(--color-offwhite);
	border: 1px solid var(--color-border);
	border-radius: var(--border-radius-m);

	& p {
		margin: 0;
		font-family: 'Play', sans-serif;
		font-size: var(--font-size-l);
		font-weight: bold;
	}

	& hr {
		width: 100%;
		opacity: 0.3;
	}

	& a {
		color: var(--color-text);
		text-decoration: none;

		&.primary {
			font-weight: bold;
		}

		&.router-link-exact-active {
			color: var(--color-orange);
		}
	}
}
</style>
