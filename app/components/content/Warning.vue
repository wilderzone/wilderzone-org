<script setup lang="ts">
defineProps<{ title?: string }>();
</script>

<template>
	<CustomBlock type="warning" :title="title"><slot /></CustomBlock>
</template>
