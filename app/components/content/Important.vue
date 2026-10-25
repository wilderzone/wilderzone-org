<script setup lang="ts">
defineProps<{ title?: string }>();
</script>

<template>
	<CustomBlock type="important" :title="title"><slot /></CustomBlock>
</template>
