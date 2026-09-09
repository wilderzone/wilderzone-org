<script setup lang="ts">
const props = defineProps<{
	download?: boolean;
	external?: boolean;
	href: string;
	icon: string;
}>();

const download = computed(() => props.download ? '' : undefined);
const rel = computed(() => props.external ? 'noreferrer' : '');
const target = computed(() => props.external ? '_blank' : '_self');
</script>

<template>
	<a
		:href
		:rel
		:target
		:download
		class="icon-link"
	>
		<Icon :name="icon" />
	</a>
</template>

<style scoped>
.icon-link {
	all: unset;
	box-sizing: border-box;
	display: grid;
	place-items: center;
	padding: var(--gap-xs);
	font-size: var(--font-size-l);
	border-radius: var(--border-radius-s);
	cursor: pointer;

	&:is(:focus-visible, :hover) {
		background: var(--color-orange-faint);
	}
}
</style>
