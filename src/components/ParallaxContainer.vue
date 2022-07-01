<script>
export default {
	computed: {
	},
	data() {
		return {
		}
	},
	methods: {
	},
	mounted() {
	}
}
</script>

<template>
	<div class="parallax_container">
		<div class="inner">
			<slot></slot>
		</div>
	</div>
</template>

<style scoped>
.parallax_container {
	position: relative;
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	--parallax_container_height: 100vh;
	height: clamp(var(--parallax_container_height), var(--parallax_container_height), var(--parallax_container_height));
	overflow: auto;
	scroll-behavior: smooth;
	scroll-snap-type: y mandatory;
}
.parallax_container > .inner {
	position: relative;
	display: flex;
	flex-flow: inherit;
	justify-content: inherit;
	align-items: inherit;
	width: 100%;
	height: 100%;
}
</style>
