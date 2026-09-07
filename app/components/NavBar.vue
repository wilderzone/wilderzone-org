<script setup lang="ts">
</script>

<template>
	<nav>
		<div class="stripe"></div>
		<div class="angle"></div>
		<NuxtLink to="/" class="logo">
			<h1>
				<img src="~/assets/images/logo.png" alt="Wilderzone">
			</h1>
		</NuxtLink>
		<ul>
			<li>
				<a href="https://llamagrab.net" target="_blank" rel="noreferrer">Servers</a>
			</li>
		</ul>
	</nav>
</template>

<style scoped>
nav {
	--background: #2c2928 url('~/assets/images/noise.png') repeat top center;
	--chamfer: var(--gap-l);
	position: sticky;
	top: 0;
	right: 0;
	left: 0;
	z-index: var(--z-index-top);
	display: grid;
	grid-template:
		'logo     angle          links' 1fr
		'logo     angle          .    ' var(--chamfer)
		/ auto    var(--chamfer) 1fr;
	flex-shrink: 0;
	font-size: var(--font-size-s);
	filter: drop-shadow(0 -2px 10px #0006);
}

.logo {
	grid-area: logo;
	display: grid;
	place-items: center;
	height: 100%;
	padding: var(--gap-xs) var(--gap-s);
	color: inherit;
	text-decoration: none;
	background: var(--background);

	& h1 {
		margin: 0;
	}

	& img {
		opacity: 0.75;
		transition: var(--transition-s) ease all;
	}

	&:is(:focus-visible, :hover) img {
		opacity: 1;
	}
}

ul {
	grid-area: links;
	display: flex;
	justify-content: flex-end;
	margin: 0;
	padding: 0 var(--gap-m) 0 0;
	list-style: none;
	background: var(--background);

	& a {
		display: grid;
		place-items: center;
		height: 100%;
		padding: 0 var(--gap-m);
		color: #ffffffb2;
		font-weight: 400;
		text-decoration: none;
		text-transform: uppercase;
		transition: var(--transition-s) ease all;

		&:is(:focus-visible, :hover) {
			color: #fff;
			background: #fff1;
		}
	}
}

.angle {
	grid-area: angle;
	background: var(--background);
	clip-path: polygon(
		0    0,
		100% 0,
		100% calc(100% - var(--chamfer)),
		0    100%
	);
}

.stripe {
	grid-area: 2 / 1 / 3 / 4;
	place-self: start;
	width: 100%;
	height: 3px;
	background: #d94000;
}
</style>
