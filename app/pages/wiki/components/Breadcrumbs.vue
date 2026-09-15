<script setup lang="ts">
interface Breadcrumb {
	name: string;
	path: string;
}

const crumbs = ref<Breadcrumb[]>([]);
const route = useRoute();

async function load(): Promise<void> {
	const collection = await queryCollection('content').all();
	const segments = route.path.split('/').filter(Boolean);
	const trail: string[] = [];
	for (const segment of segments) {
		trail.push(segment);
		if (segment === 'wiki') continue;
		const path = '/' + trail.join('/');
		const page = collection.find(item => item.path === path);
		if (!page) continue;
		crumbs.value.push({ name: page.title, path });
	}
}

watch(() => route.path, load, { immediate: true });
</script>

<template>
	<nav class="breadcrumbs">
		<div class="trail">
			<Icon name="material-symbols:book-ribbon-outline-sharp" />
			<NuxtLink
				to="/wiki"
				class="crumb"
			>
				Wiki
			</NuxtLink>
			<template v-for="crumb of crumbs">
				<Icon name="ic:baseline-chevron-right" style="color: var(--color-orange)" />
				<NuxtLink
					:to="crumb.path"
					class="crumb"
				>
					{{ crumb.name }}
				</NuxtLink>
			</template>
		</div>
	</nav>
</template>

<style scoped>
.breadcrumbs {
	background: var(--color-card);
}

.trail {
	display: flex;
	align-items: center;
	gap: var(--gap-xs);
	width: 100%;
	max-width: var(--content-width);
	margin: auto;
	padding: var(--gap-m) var(--gap-xl);
}

.crumb {
	all: unset;
	box-sizing: border-box;
	display: grid;
	place-items: center;
	padding: var(--gap-xs);
	font-size: var(--font-size-s);
	border-radius: var(--border-radius-s);
	transition: var(--transition-s) ease background-color;
	cursor: pointer;

	&:is(:focus-visible, :hover) {
		background: #4442;
	}
}
</style>
