<script setup lang="ts">
import image1 from '~/assets/images/panorama/dd222_2170x200.jpg';
import image2 from '~/assets/images/panorama/dd14_2170x200.jpg';
import image3 from '~/assets/images/panorama/tart22_2170x200.jpg';
import image4 from '~/assets/images/panorama/kata3223_2170x200.jpg';

const images = [
	image1,
	image2,
	image3,
	image4
];
</script>

<template>
	<div class="panorama-bar">
		<Carousel :images />
	</div>
</template>

<style scoped>
.panorama-bar {
	display: grid;
	place-items: center;
	flex-shrink: 0;
	height: 200px;
	margin-top: calc(var(--gap-l) * -1);
}
</style>
