<script setup lang="ts">
defineProps<{ title?: string }>();
</script>

<template>
	<CustomBlock type="tip" :title="title"><slot /></CustomBlock>
</template>
