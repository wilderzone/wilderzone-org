<script setup lang="ts">
</script>

<template>
	<div class="page-end-marker">
		<div class="content"><slot></slot></div>
		<div class="decorations">
			<div class="left"></div>
			<div class="center">
				<div class="cross"></div>
			</div>
			<div class="right"></div>
		</div>
	</div>
</template>

<style scoped>
.page-end-marker {
	--width: calc(var(--gap-xl) * 2);
	--height: calc(var(--font-size-m) * 0.8);
	display: grid;
	grid-template:
		'content       content         content' auto
		'left          center          right  ' var(--height)
		/ var(--width) var(--height)   var(--width);
	justify-content: center;
	gap: var(--gap-m);
	margin: var(--gap-xl) auto;
	color: var(--color-grey);

	& .content {
		grid-area: content;
	}

	& .decorations {
		grid-area: 2 / 1 / 3 / 4;
		display: grid;
		grid-template-columns: subgrid;
		grid-template-rows: subgrid;
		align-items: center;
		opacity: 0.25;
	}

	& .left {
		grid-area: left;
		background: currentColor;
		height: 1px;
		opacity: 0.7;
		mask-image: linear-gradient(to left, black 50%, transparent);
	}

	& .center {
		grid-area: center;
		height: 100%;
		border: 1px solid currentColor;
		transform: rotate(45deg);
	}

	& .cross {
		width: 100%;
		height: 100%;
		background:
			linear-gradient(0deg, currentColor, currentColor) center / 70% 2px no-repeat,
			linear-gradient(0deg, currentColor, currentColor) center / 2px 70% no-repeat;
		transform: rotate(45deg);
	}

	& .right {
		grid-area: right;
		background: currentColor;
		height: 1px;
		opacity: 0.7;
		mask-image: linear-gradient(to right, black 50%, transparent);
	}
}
</style>
