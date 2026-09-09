<script setup lang="ts">
defineProps<{
	icon: string;
}>();
</script>

<template>
	<button class="icon-button">
		<Icon :name="icon" />
	</button>
</template>

<style scoped>
.icon-button {
	all: unset;
	box-sizing: border-box;
	display: grid;
	place-items: center;
	padding: var(--gap-xs);
	font-size: var(--font-size-l);
	border-radius: var(--border-radius-s);
	transition: var(--transition-s) ease background-color;
	cursor: pointer;

	&:is(:focus-visible, :hover) {
		background: var(--color-orange-faint);
	}
}
</style>
