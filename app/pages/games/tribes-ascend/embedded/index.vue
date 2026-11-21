<script setup lang="ts">
import favicon from '../favicon.webp';

const seo = {
	title: 'Download Tribes: Ascend',
	description: `The world's fastest shooter! Download Tribes: Ascend for Windows and Linux.`,
	canonical: 'https://wilderzone.org/games/tribes-ascend',
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
		{ rel: 'canonical', href: seo.canonical },
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
	ogUrl: seo.canonical,
	twitterCard: 'summary_large_image',
	twitterImageAlt: 'site cover image',
	themeColor: '#41637C',
});

const { isLinux } = useDevice();
const cdn = 'https://cdn.wilderzone.org/ta/game/installer';
const download = {
	linux: `${cdn}/ta-installer-linux.run`,
	windows: `${cdn}/ta-installer-windows.exe`
};
const version = ref('');

async function load(): Promise<void> {
	const url = `${cdn}/version`;
	const response = await fetch(url);
	version.value = await response.text();
}

onMounted(load);
</script>

<template>
	<div class="page">
		<main>
			<div class="card"></div>

			<h1><img src="../logo.png" alt="Tribes: Ascend" class="logo"></h1>
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
				:href="isLinux ? download.linux : download.windows"
				download="tribes-ascend-installer-windows"
				target="_blank"
				class="download"
			>Download</a>

			<ul class="alternatives" aria-label="Alternative downloads">
				<li aria-labelledby="windows" title="Download for Windows">
					<a
						id="windows"
						:href="download.windows"
						download="tribes-ascend-installer-windows"
						target="_blank"
						class="alternative"
					>
						<img src="../windows.svg" draggable="false" alt="" class="icon">
						Windows
					</a>
				</li>
				<li aria-labelledby="linux" title="Download for Linux">
					<a
						id="linux"
						:href="download.linux"
						download="tribes-ascend-installer-linux"
						target="_blank"
						class="alternative"
					>
						<img src="../linux.svg" draggable="false" alt="" class="icon">
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
						<img src="../server.svg" draggable="false" alt="" class="icon">
						Server
					</a>
				</li>
			</ul>

			<p class="version">
				<span v-if="version" :title="`Installer version: ${version}`">{{ version }}</span>
			</p>
		</main>
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
	--logo-offset: 25px;
	--transition: 0.1s;
	display: grid;
	grid-template:
		'.            .               .' var(--gap-l)
		'.            .               .' 1fr
		'.            logo            .' auto
		'.            subtext         .' auto
		'.            .               .' var(--gap-m)
		'.            download        .' auto
		'.            alternatives    .' auto
		'.            .               .' var(--gap-m)
		'.            version         .' auto
		'.            .               .' 1fr
		'.            .               .' var(--gap-l)
		/ 1fr         min(53ch, 85vw) 1fr;
	gap: var(--gap-m) 0;
	flex: 1;
	min-height: 100%;
	margin: 0;
	color: var(--color-text);
	font-family: 'Play', sans-serif;
	font-weight: 500;
	background: url('../background-texture.png');
	background-position: top right;
	background-repeat: no-repeat;
	background-size: cover;
}

main {
	grid-area: 1 / 2 / 12 / 3;
	display: grid;
	grid-template-columns: subgrid;
	grid-template-rows: subgrid;
	gap: var(--gap-m) 0;
	height: 100%;
	margin: auto;

	.card {
		position: absolute;
		inset: 0 calc(var(--gap-l) * -1);
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
	grid-area: alternatives;
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

.version {
	grid-area: version;
	display: flex;
	align-items: center;
	min-height: 1lh;
	margin: 0;
	font-size: 0.8rem;
	opacity: 0.25;

	&::before,
	&::after {
		content: '';
		width: 100%;
		height: 1px;
		opacity: 0.5;
	}

	&::before {
		background: linear-gradient(to right, transparent, currentColor);
	}

	&::after {
		background: linear-gradient(to left, transparent, currentColor);
	}

	& span {
		margin-inline: var(--gap-m);
	}
}
</style>
