<script setup lang="ts">
import 'vitepress/dist/client/theme-default/styles/vars.css';
import 'vitepress/dist/client/theme-default/styles/components/vp-doc.css';
import 'vitepress/dist/client/theme-default/styles/components/custom-block.css';

useSeoMeta({
	title: 'Wiki | Wilderzone.org'
});

const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
	return queryCollection('docs').path(route.path).first()
});

if (!page.value) {
	throw createError({ statusCode: 404, statusMessage: 'Page not found' });
}

useSeoMeta({
	title: page.value?.title,
	description: page.value?.description
});
</script>

<template>
	<NavBar />
	<PanoramaBar />
	<WikiComponentsBreadcrumbs collection="docs" />
	<main>
		<WikiComponentsSideNavigation />
		<ContentRenderer v-if="page" :value="page" class="content vp-doc" />
		<WikiComponentsTailNavigation />
	</main>
	<Footer />
</template>

<style scoped>
main {
	display: grid;
	grid-template:
		'.       nav    content .   .' 1fr
		'.       .      tail    .   .' auto
		/ auto   200px  min(100%, var(--content-width)) 200px auto;
	padding-top: var(--gap-m);

	& > .content {
		grid-area: content;
		padding-inline: var(--gap-xl);
	}
}
</style>

<style>
/* Swap VitePress's indigo accent for the site's orange. VitePress derives its tip colours
   from these on :root, so they must be overridden there (doubled to beat vars.css). */
:root:root {
	--vp-c-brand-1: var(--color-orange);
	--vp-c-brand-2: var(--color-orange);
	--vp-c-brand-3: var(--color-orange);
	--vp-c-brand-soft: var(--color-orange-faint);
}

.vp-doc {
	& h1 {
		display: flex;
		align-items: center;
		gap: 0.7ch;
	}

	& img {
		max-width: 100%;
		border-radius: var(--border-radius-m);
	}

	& .custom-block {
		border-radius: var(--border-radius-m);
	}
}
</style>
