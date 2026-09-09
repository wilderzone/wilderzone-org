<script setup lang="ts">
const props = defineProps<{
	duration: number;
}>();

const active = ref(false);
const bar = ref<HTMLDivElement>();
const duration = computed(() => `${props.duration}ms`);

function enable(): void {
	active.value = true;
}

function disable(): void {
	active.value = false;
}

function restart(): void {
	const animations = bar.value?.getAnimations() ?? [];
	for (const animation of animations) {
		animation.cancel();
		animation.play();
	}
}

defineExpose({
	enable,
	disable,
	restart,
});
</script>

<template>
	<div class="timer" :class="{ active }">
		<span ref="bar" class="timer-bar"></span>
	</div>
</template>

<style scoped>
.timer {
	height: var(--font-size-xs);
	background: var(--color-background);
	border: 1px solid var(--color-border);
	border-radius: var(--border-radius-s);
	overflow: hidden;

	& .timer-bar {
		display: block;
		width: 0%;
		height: 100%;
		background: var(--color-orange);
	}

	&.active .timer-bar {
		animation: timer-bar v-bind(duration) linear infinite;
	}
}

@keyframes timer-bar {
	0%   { width: 100%; }
	100% { width: 0%;   }
}
</style>
