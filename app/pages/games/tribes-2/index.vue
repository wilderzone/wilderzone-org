<script setup lang="ts">
import favicon from './favicon.gif';

const redirect = 'https://www.tribesnext.com/';

useHead({
	title: 'Redirecting...',
	link: [
		{ rel: 'shortcut icon', href: favicon, type: 'image/gif' },
	]
});

await navigateTo(redirect, { external: true });
</script>

<template>
	<p>If you are not redirected automatically, follow this <a :href="redirect" rel="noreferrer">link</a>.</p>
</template>

<style scoped>
</style>
