<script setup lang="ts">
defineProps<{ title?: string }>();
</script>

<template>
	<CustomBlock type="info" :title="title"><slot /></CustomBlock>
</template>
