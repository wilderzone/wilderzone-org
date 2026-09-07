<script setup lang="ts">
const {
	delay = 8_000,
	images = [],
} = defineProps<{
	delay?: number;
	images: string[];
}>();

const current = ref(0);
let interval = 0;

function next(): void {
	current.value = (current.value + 1) % images.length;
}

function start(): void {
	interval = window.setInterval(next, delay);
}

function stop(): void {
	window.clearInterval(interval);
}

function restart(): void {
	stop();
	start();
}

watch(() => delay, restart);
onMounted(start);
</script>

<template>
	<div class="carousel">
		<img
			v-for="image, index of images"
			:src="image"
			alt=""
			:class="{ visible: index === current }"
		>
	</div>
</template>

<style scoped>
.carousel {
	display: grid;
	place-items: center;
	width: 100%;
	height: 100%;

	& img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		transition: var(--transition-xl) ease opacity;

		&.visible {
			opacity: 1;
		}
	}
}
</style>
