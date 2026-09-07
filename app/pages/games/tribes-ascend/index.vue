<script setup lang="ts">
import favicon from './favicon.webp';

const seo = {
	title: 'Download Tribes: Ascend',
	description: `The world's fastest shooter! Download Tribes: Ascend for Windows and Linux.`,
	keywords: [
		'Wilderzone', 'Tribes Ascend', 'TA', 'Tribes', 'Ascend', 'FPS', 'FPS-Z',
		'fast-paced', 'video game', 'game', 'download', 'install', 'servers',
		'server hosting', 'free-to-play', 'free'
	],
};

useHead({
	meta: [
		{ name: 'keywords', content: seo.keywords.join(', ') },
	],
	link: [
		{ rel: 'shortcut icon', href: favicon, type: 'image/webp' },
		{ rel: 'canonical', href: 'https://wilderzone.org/games/tribes-ascend/' },
	]
});

useSeoMeta({
	title: seo.title,
	ogTitle: seo.title,
	ogLocale: 'en_US',
	author: 'Wilderzone.org',
	ogSiteName: 'Wilderzone.org',
	description: seo.description,
	ogDescription: seo.description,
	ogType: 'website',
	ogImage: 'https://wilderzone.org/games/tribes-ascend/site-cover.webp',
	ogUrl: 'https://wilderzone.org/games/tribes-ascend/',
	twitterCard: 'summary_large_image',
	twitterImageAlt: 'site cover image',
	themeColor: '#41637C',
});
</script>

<template>
	<div class="page">
		<nav>
			<NuxtLink to="/games" class="back">
				<img src="./back.svg" alt="" class="icon">
				Back to all games
			</NuxtLink>
		</nav>

		<main>
			<div class="card"></div>

			<h1><img src="./logo.png" alt="Tribes: Ascend" class="logo"></h1>
			<p class="subtext">
				<span class="row">
					The world's fastest shooter
				</span>
				<span class="row">
					Hi-Rez Studios,
					<time datetime="2012-04-12">2012</time>
				</span>
			</p>

			<a
				href="https://cdn.wilderzone.live/ta/game/installer/ta-installer-windows.exe"
				download="tribes-ascend-installer"
				target="_blank"
				class="download"
			>Download</a>

			<ul class="alternatives" aria-label="Alternative downloads">
				<li aria-labelledby="windows" title="Download for Windows">
					<a
						id="windows"
						href="https://cdn.wilderzone.live/ta/game/installer/ta-installer-windows.exe"
						download="tribes-ascend-installer"
						target="_blank"
						class="alternative"
					>
						<img src="./windows.svg" alt="" class="icon">
						Windows
					</a>
				</li>
				<li aria-labelledby="linux" title="Download for Linux">
					<a
						id="linux"
						href="https://cdn.wilderzone.live/ta/game/installer/ta-installer-linux.zip"
						download="tribes-ascend-installer"
						target="_blank"
						class="alternative"
					>
						<img src="./linux.svg" alt="" class="icon">
						Linux
					</a>
				</li>
				<li aria-labelledby="server" title="Host a server">
					<a
						id="server"
						href="https://llamagrab.net"
						target="_blank"
						class="alternative"
					>
						<img src="./server.svg" alt="" class="icon">
						Server
					</a>
				</li>
			</ul>
		</main>

		<footer>
			<a href="https://www.hirezstudios.com/" target="_blank" rel="noreferrer">Game & Images &copy; Hi-Rez Studios 2016</a>
			<NuxtLink to="/" target="_blank" rel="noreferrer">Website & Installer &copy; Wilderzone 2026</NuxtLink>
			<a href="https://discord.com/invite/dd8JgzJ" target="_blank" rel="noreferrer">Ask a question</a>
			<a href="https://feedback.wilderzone.org/" target="_blank" rel="noreferrer">Give feedback</a>
			<a href="https://ko-fi.com/wilderzone" target="_blank" rel="noreferrer">Donate</a>
			<a href="https://github.com/wilderzone/ta-installer" target="_blank" rel="noreferrer">Installer source code, contributors, & documentation</a>
		</footer>
	</div>
</template>

<style scoped>
.page {
	--color-text: rgb(194, 211, 226);
	--color-gold: rgb(255, 230, 176);
	--color-red: rgb(223, 73, 55);
	--color-link: rgb(40, 111, 159);
	--color-link-hover: rgba(194, 211, 226, 0.1);
	--border-radius: 3px;
	--gap-s: 10px;
	--gap-m: 15px;
	--gap-l: 35px;
	--grid-last-column: 2.5fr;
	--logo-offset: 25px;
	--transition: 0.1s;
	display: grid;
	grid-template:
		'.            .               .' var(--gap-m)
		'.            navigation      .' auto
		'.            .               .' var(--gap-l)
		'.            .               .' 1fr
		'.            logo            .' auto
		'.            subtext         .' auto
		'.            .               .' var(--gap-m)
		'.            download        .' auto
		'.            variants        .' auto
		'.            .               .' 1fr
		'.            .               .' var(--gap-l)
		'.            footer          .' auto
		'.            .               .' var(--gap-m)
		/ 1fr         min(53ch, 85vw) var(--grid-last-column);
	gap: var(--gap-m) 0;
	min-height: 100%;
	margin: 0;
	color: var(--color-text);
	font-family: 'Play', sans-serif;
	font-weight: 500;
	background: url('./background.jpg'), url('./background-texture.png');
	background-position: top right, top right;
	background-repeat: no-repeat;
	background-size: cover;
}

nav {
	grid-area: navigation;
	z-index: 1;
	font-size: 0.8rem;

	& a {
		display: flex;
		align-items: center;
		gap: 1ch;
		color: var(--color-link);
		text-decoration: none;
		filter: grayscale(1);
		opacity: 0.8;
		transition: var(--transition) ease all;

		&:is(:focus-visible, :hover) {
			filter: grayscale(0);
		}

		& .icon {
			height: 1em;
		}
	}
}

main {
	grid-area: 1 / 2 / 14 / 3;
	display: grid;
	grid-template-columns: subgrid;
	grid-template-rows: subgrid;
	gap: var(--gap-m) 0;
	height: 100%;
	margin: auto;

	.card {
		position: absolute;
		inset: 0 calc(var(--gap-l) * -1);
		border: 1px solid rgb(from var(--color-gold) r g b / 0.1);
		border-top: unset;
		border-bottom: unset;
		backdrop-filter: blur(8px);
		pointer-events: none;
	}

	& h1 {
		grid-area: logo;
		width: 100%;
		margin: 0;
		margin-left: calc(var(--logo-offset) * -1);

		& img {
			width: calc(100% + var(--logo-offset));
		}
	}

	& .subtext {
		grid-area: subtext;
		display: flex;
		flex-flow: column nowrap;
		gap: 0.5ch 1ch;
		margin: 0;
		font-size: 1.2rem;
		font-style: italic;
		font-weight: inherit;
		text-wrap: nowrap;

		& .row {
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			gap: inherit;

			&::after {
				content: '';
				width: 100%;
				height: 68%;
				background-image: repeating-linear-gradient(120deg, transparent, var(--color-gold) 1px, transparent 3px, transparent 10px);
				background-position: -2px center;
				background-repeat: repeat-x;
				opacity: 0.4;
				mask-image: linear-gradient(to right, black, #000b 95%, transparent);
			}

			&:nth-of-type(2) {
				filter: brightness(0.75);
			}
		}
	}

	& .download {
		grid-area: download;
		padding: 1rem 2rem;
		color: var(--color-gold);
		font-size: 2rem;
		text-align: center;
		text-decoration: none;
		text-shadow: 0 0 4px rgba(0, 0, 0, .5);
		text-transform: uppercase;
		background-color: rgb(from var(--color-red) r g b / 0.02);
		border: 2px solid var(--color-red);
		border-radius: var(--border-radius);
		transition: var(--transition) ease all;

		&:is(:focus-visible, :hover) {
			background-color: rgb(from var(--color-red) r g b / 0.05);
			text-shadow: 0 0 20px #fffa;
			box-shadow: 0 0 8px var(--color-red), 0 0 6px var(--color-red) inset;
		}
	}
}

.alternatives {
	grid-area: variants;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	gap: var(--gap-s);
	width: 100%;
	margin: 0;
	padding: 0;
	list-style: none;

	& li {
		flex: 1 1 15ch;
	}

	& .alternative {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1ch;
		padding: 1ch 2ch;
		color: var(--color-link);
		font-size: 1.1rem;
		text-align: center;
		text-decoration: none;
		border-radius: var(--border-radius);
		filter: grayscale(1);
		transition: var(--transition) ease all;

		&:is(:focus-visible, :hover) {
			background-color: var(--color-link-hover);
			filter: grayscale(0);
		}

		& .icon {
			height: 1em;
		}
	}
}

footer {
	grid-area: footer;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	align-items: center;
	gap: var(--gap-s) var(--gap-m);
	width: 100%;
	font-size: 0.8rem;
	text-align: center;

	& a {
		color: var(--color-link);
		text-decoration: none;
		filter: grayscale(1);
		opacity: 0.8;
		transition: var(--transition) ease all;

		&:is(:focus-visible, :hover) {
			filter: grayscale(0);
		}
	}
}

@media screen and (max-width: 1300px) {
	.page {
		--grid-last-column: 1fr;
		background-position: top right -120px, top right;
	}
}

@media screen and (max-width: 360px) {
	.page {
		background-position: top right -190px, top right;
	}
}
</style>
