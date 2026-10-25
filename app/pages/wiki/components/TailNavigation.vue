<script setup lang="ts">
</script>

<template>
	<nav class="tail-navigation">
		<a href="">
			<p>Previous page</p>
			<p>Overview</p>
		</a>
		<a href="">
			<p>Next page</p>
			<p>Subcommands</p>
		</a>
	</nav>
</template>

<style scoped>
.tail-navigation {
	grid-area: tail;
	display: flex;
	justify-content: space-between;
	gap: var(--gap-m);
	margin: var(--gap-xl) 0 var(--gap-m);
	padding-inline: var(--gap-xl);

	& a {
		display: flex;
		flex-flow: column nowrap;
		gap: var(--gap-s);
		width: 50%;
		padding: var(--gap-m);
		color: var(--color-orange);
		text-decoration: none;
		border: 1px solid var(--color-border);
		border-radius: var(--border-radius-m);
		transition: var(--transition-s) ease border-color;

		&:first-of-type {
			align-items: flex-start;
		}

		&:last-of-type {
			align-items: flex-end;
		}

		&:is(:focus-visible, :hover) {
			border-color: var(--color-orange);
		}

		& p {
			margin: 0;

			&:first-of-type {
				color: var(--color-text-dim);
				font-size: var(--font-size-s);
			}
		}
	}
}
</style>
