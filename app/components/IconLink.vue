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
		<span class="content"><slot></slot></span>
	</a>
</template>

<style scoped>
.icon-link {
	all: unset;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: var(--gap-xs);
	padding: var(--gap-xs) var(--gap-s);
	font-size: var(--font-size-l);
	border-radius: var(--border-radius-s);
	transition: var(--transition-s) ease background-color;
	cursor: pointer;

	&:is(:focus-visible, :hover) {
		background: var(--color-orange-faint);
	}

	& .content {
		font-size: var(--font-size-m);

		&:empty {
			display: none;
		}
	}
}
</style>
