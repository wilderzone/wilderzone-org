<script setup lang="ts">
defineProps<{
	icon: string;
	disabled?: boolean;
	loading?: boolean;
}>();
</script>

<template>
	<button class="icon-button" :disabled="disabled || loading">
		<Icon v-if="loading" name="mingcute:loading-fill" class="loading-icon" />
		<Icon v-else :name="icon" />
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

	&:disabled {
		pointer-events: none;
	}

	& .loading-icon {
		animation: loading-icon 0.8s linear infinite;
	}
}

@keyframes loading-icon {
	0%   { transform: rotate(0deg);   }
	100% { transform: rotate(360deg); }
}
</style>
