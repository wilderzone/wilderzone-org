<script setup lang="ts">
defineProps<{
	type: 'info' | 'tip' | 'important' | 'warning' | 'danger';
	title?: string;
}>();
</script>

<template>
	<div class="custom-block" :class="type">
		<p class="custom-block-title">{{ title ?? type.toUpperCase() }}</p>
		<slot />
	</div>
</template>
