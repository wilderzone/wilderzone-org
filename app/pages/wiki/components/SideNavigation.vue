<script setup lang="ts">
</script>

<template>
	<nav class="side-navigation">
		<p>Tribes: Ascend Installer</p>
		<hr>
		<a href="" class="primary">Overview</a>
		<a href="">Glossary</a>
		<hr>
		<a href="" class="primary">CLI</a>
		<a href="">Subcommands</a>
		<a href="">Options</a>
		<a href="">Output</a>
		<a href="">Dependency Resolution</a>
	</nav>
</template>

<style scoped>
.side-navigation {
	grid-area: nav;
	position: sticky;
	top: 80px;
	display: flex;
	flex-flow: column nowrap;
	gap: var(--gap-s);
	height: fit-content;
	padding: var(--gap-m);
	font-size: var(--font-size-s);
	background: var(--color-card);
	border: 1px solid var(--color-border);
	border-radius: var(--border-radius-m);

	& p {
		margin: 0;
	}

	& hr {
		width: 100%;
		opacity: 0.3;
	}

	& a {
		text-decoration: none;

		&.primary {
			font-weight: bold;
		}
	}
}
</style>
