<script setup lang="ts">
// Wraps code blocks in VitePress's `language-*` container so its code block styles apply.
defineProps<{
	code?: string;
	language?: string | null;
	filename?: string | null;
	highlights?: number[];
	meta?: string | null;
	class?: string | null;
}>();
</script>

<template>
	<div :class="`language-${language ?? 'text'}`">
		<span v-if="language" class="lang">{{ language }}</span>
		<pre :class="$props.class"><slot /></pre>
	</div>
</template>

<style>
pre code .line {
	display: block;
}
</style>
