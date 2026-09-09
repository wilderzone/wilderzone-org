<script setup lang="ts">
const props = defineProps<{
	content: string;
	icon: string;
}>();

const duration = 1_500;
const swap = ref(false);

function share(): void {
	swap.value = true;
	window.navigator.clipboard.writeText(props.content);
	window.setTimeout(() => swap.value = false, duration);
}
</script>

<template>
	<button class="share-button" :class="{ swap }" @click="share()">
		<Icon v-if="swap" name="ic:round-done" />
		<Icon v-else :name="icon" />
	</button>
</template>

<style scoped>
.share-button {
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

	&.swap {
		pointer-events: none;
	}
}
</style>
