<template>
	<NavBar />
	<PanoramaBar />
	<main>
		<div class="intro">
			<p>Welcome to the Wilderzone.org restoration project.</p>
			<p>We are in the process of restoring the <a href="https://web.archive.org/web/20160622130520/http://www.wilderzone.org/" target="_blank" rel="noreferrer">original Wilderzone.org website</a> that you may be familiar with, as well as bringing it up-to-date with the latest TA community content.</p>
			<p>You can contribute to the project through <a href="https://github.com/wilderzone/wilderzone-org" target="_blank" rel="noreferrer">our GitHub repository</a>, or get in contact with us via the <a href="https://discord.gg/dd8JgzJ">TA Community Hub Discord server</a>.</p>
			<p>Have a nice day!</p>
		</div>
	</main>
	<Footer />
</template>

<style scoped>
.intro {
	width: 100%;
	max-width: var(--content-width);
	margin: auto;
	padding: var(--gap-xl) var(--gap-m);
}
</style>
