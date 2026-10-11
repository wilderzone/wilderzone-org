<script setup lang="ts">
</script>

<template>
	<h1>
		<div class="left"></div>
		<div class="right"></div>
		<span class="heading"><slot></slot></span>
	</h1>
</template>

<style scoped>
h1 {
	--background: var(--color-white);
	--chamfer: calc(var(--gap-l) * 1.7);
	--overshoot: 1px;
	position: sticky;
    top: 40px;
    z-index: var(--z-index-mid);
	display: grid;
	grid-template:
		'left     heading     right' 1fr
		'left     heading     right' var(--chamfer)
		/ 1fr     minmax(auto, var(--content-width)) 1fr;
	flex-shrink: 0;
	margin: 0;
	font-family: "Play", sans-serif;
	filter: drop-shadow(0 -3px 6px #0001);
}

.heading {
	grid-area: heading;
	padding: var(--gap-s) var(--gap-l);
	background: var(--color-white);
}

.left {
	grid-area: left;
	background: var(--background);
	clip-path: polygon(
		0    0,
		calc(100% + var(--overshoot)) 0,
		calc(100% + var(--overshoot)) calc(100% + var(--overshoot)),
		calc(100% - var(--chamfer)) calc(100% - var(--chamfer)),
		0    calc(100% - var(--chamfer))
	);
}

.right {
	grid-area: right;
	background: var(--background);
	clip-path: polygon(
		calc(0% - var(--overshoot)) 0,
		100% 0,
		100% calc(100% - var(--chamfer)),
		var(--chamfer) calc(100% - var(--chamfer)),
		calc(0% - var(--overshoot)) calc(100% + var(--overshoot))
	);
}
</style>
