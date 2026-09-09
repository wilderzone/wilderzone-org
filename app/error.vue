<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps<{
	error?: NuxtError
}>();

const message = computed(() => props.error?.message || 'An error has occurred.');
const status = computed(() => props.error?.status || '500');

function handleError(): void {
	void clearError({ redirect: '/' });
}
</script>

<template>
	<main class="error-page">
		<img src="~/assets/images/shazbot.jpg" width="350" alt="">
		<h1>{{ status }}</h1>
		<p>{{ message }}</p>
		<button @click="handleError">
			Return to the homepage
		</button>
	</main>
</template>

<style scoped>
.error-page {
	flex: 0;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	gap: var(--gap-m);
	height: unset;
	margin: auto;
	padding: var(--gap-l);
	padding-bottom: calc(var(--gap-l) * 4);
	font-family: 'Play', sans-serif;

	& img {
		border-radius: var(--border-radius-m);
	}

	& h1 {
		display: flex;
		align-items: center;
		gap: var(--gap-l);
		width: 100%;
		margin: 0;

		&::before,
		&::after {
			content: '';
			display: block;
			width: 100%;
			height: 1px;
			background: currentColor;
			opacity: 0.2;
		}
	}

	& p {
		margin: 0;
		margin-bottom: var(--gap-l);
	}

	& button {
		all: unset;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: var(--gap-s);
		width: 100%;
		padding: var(--gap-s);
		color: inherit;
		text-decoration: none;
		background: var(--color-card-metal);
		border-radius: var(--border-radius-s);
		cursor: pointer;

		&:is(:focus-visible, :hover) {
			background: var(--color-orange-faint);
		}
	}
}
</style>
