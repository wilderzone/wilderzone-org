<script setup lang="ts">
import './style.css';
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
</template>
