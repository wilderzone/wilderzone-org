<script setup lang="ts">
useSeoMeta({
	title: 'Wiki | Wilderzone.org'
});

const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
	return queryCollection('content').path(route.path).first()
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
	<WikiComponentsBreadcrumbs />
	<main>
		<ContentRenderer v-if="page" :value="page" />
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
