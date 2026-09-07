<script setup lang="ts">
</script>

<template>
	<footer>
		<div class="left"></div>
		<div class="angle-l"></div>
		<div class="angle-r"></div>
		<div class="right"></div>

		<div class="links">
			<ul class="left">
				<li>
					<a href='https://discord.gg/dd8JgzJ' target='_blank' rel='noreferrer'>Ask a question</a>
				</li>
				<li>
					<a href='https://feedback.wilderzone.org/' target='_blank' rel='noreferrer'>Give feedback</a>
				</li>
				<li>
					<a href='https://ko-fi.com/wilderzone' target='_blank' rel='noreferrer'>Donate</a>
				</li>
			</ul>
			<div class="logo">
				<img src="~/assets/images/icon.svg" alt="">
			</div>
			<ul class="right">
				<li>
					<a href='https://github.com/wilderzone' target='_blank' rel='noreferrer'>Source code</a>
				</li>
				<li>
					<StatusLink />
				</li>
				<li>
					<a href='https://wilderzone.org/' target='_blank' rel='noreferrer'>© 2026 Wilderzone.org</a>
				</li>
			</ul>
		</div>
	</footer>
</template>

<style scoped>
footer {
	--background: #2c2928 url('~/assets/images/noise.png') repeat top center;
	--chamfer: var(--gap-l);
	z-index: var(--z-index-top);
	display: grid;
	grid-template:
		'.        angle-l        links       angle-r        .    ' var(--chamfer)
		'left     angle-l        links       angle-r        right' 1fr
		/ 1fr     var(--chamfer) minmax(auto, var(--content-width)) var(--chamfer) 1fr;
	flex-shrink: 0;
	min-height: 100px;
	filter: drop-shadow(0 2px 10px #0006);
}

.left {
	grid-area: left;
	background: var(--background);
}

.right {
	grid-area: right;
	background: var(--background);
}

.angle-l {
	grid-area: angle-l;
	background: var(--background);
	clip-path: polygon(
		0    var(--chamfer),
		100% 0,
		100% 100%,
		0    100%
	);
}

.angle-r {
	grid-area: angle-r;
	background: var(--background);
	clip-path: polygon(
		0    0,
		100% var(--chamfer),
		100% 100%,
		0    100%
	);
}

.links {
	grid-area: links;
	display: grid;
	grid-template:
		'links-l logo    links-r' 1fr
		/ 1fr    auto    1fr;
	place-items: center;
	background: var(--background);

	ul {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
		margin: 0;
		padding: 0;
		list-style: none;

		&.left {
			grid-area: links-l;
		}

		&.right {
			grid-area: links-r;
		}

		& a {
			display: grid;
			place-items: center;
			padding: var(--gap-s) var(--gap-m);
			color: #ffffffb2;
			font-weight: 400;
			text-decoration: none;
			white-space: nowrap;
			border-radius: var(--border-radius-s);
			transition: var(--transition-s) ease all;

			&:is(:focus-visible, :hover) {
				color: #fff;
				background: #fff1;
			}
		}
	}

	& .logo {
		grid-area: logo;
		display: grid;
		place-items: center;
		height: 100%;
		aspect-ratio: 1;
		padding: var(--gap-m);
		filter: brightness(2);
	}
}
</style>
