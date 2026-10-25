<script setup lang="ts">
defineProps<{ title?: string }>();
</script>

<template>
	<CustomBlock type="danger" :title="title"><slot /></CustomBlock>
</template>
