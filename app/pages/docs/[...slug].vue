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
		<ContentRenderer v-if="page" :value="page" class="vp-doc" />
	</main>
	<Footer />
</template>

<style scoped>
main {
	width: 100%;
	max-width: var(--content-width);
	margin: auto;
	padding-top: var(--gap-m);
	padding-inline: var(--gap-xl);
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
</style>
