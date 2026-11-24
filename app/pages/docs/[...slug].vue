<script setup lang="ts">
import 'vitepress/dist/client/theme-default/styles/vars.css';
import 'vitepress/dist/client/theme-default/styles/components/vp-doc.css';
import 'vitepress/dist/client/theme-default/styles/components/custom-block.css';

useSeoMeta({
	title: 'Wiki | Wilderzone.org'
});

const route = useRoute();
const section = computed(() => '/' + route.path.split('/').filter(Boolean).slice(0, 2).join('/'));
const { data: page } = await useAsyncData(route.path, () => {
	return queryCollection('docs').path(route.path).first()
});

if (!page.value) {
	throw createError({ statusCode: 404, statusMessage: 'Page not found' });
}

useSeoMeta({
	title: page.value?.title,
	description: page.value?.description
});
</script>

<template>
	<NavBar />
	<PanoramaBar />
	<WikiComponentsBreadcrumbs collection="docs" />
	<main>
		<WikiComponentsSideNavigation collection="docs" :root="section" />
		<ContentRenderer v-if="page" :value="page" class="content vp-doc" />
		<WikiComponentsTailNavigation collection="docs" :root="section" />
	</main>
	<Footer />
</template>

<style scoped>
main {
	display: grid;
	grid-template:
		'.       nav    content .   .' 1fr
		'.       .      tail    .   .' auto
		/ auto   200px  min(100%, var(--content-width)) 200px auto;
	padding-top: var(--gap-m);

	& > .content {
		grid-area: content;
		padding-inline: var(--gap-xl);
	}
}
</style>

<style>
/* Swap VitePress's indigo accent for the site's orange. VitePress derives its tip colours
   from these on :root, so they must be overridden there (doubled to beat vars.css). */
:root:root {
	--vp-c-brand-1: var(--color-orange);
	--vp-c-brand-2: var(--color-orange);
	--vp-c-brand-3: var(--color-orange);
	--vp-c-brand-soft: var(--color-orange-faint);
}

.vp-doc {
	& h1 {
		display: flex;
		align-items: center;
		gap: 0.7ch;
	}

	& :is(h2, h3) > a {
		display: inline-block;
		width: 100%;
		color: inherit;
		text-decoration: none;

		&::before {
			content: '#';
			margin-inline-start: -1.5ch;
			margin-inline-end: 0.5ch;
			color: var(--vp-c-brand-1);
			opacity: 0;
			transition: color 0.25s, opacity 0.25s;
		}

		&:is(:focus-visible, :hover)::before {
			opacity: 1;
		}
	}

	& p {
		line-height: normal;

		&:has(+ :is(ol, ul)) {
			margin-block-end: 8px;
		}

		& + :is(ol, ul) {
			margin-block-start: 8px;
		}

		&:has(> img:only-child) {
			margin-block-end: 42px;
		}

		& + :is(ol, ul) {
			margin-block-start: 8px;
		}
	}

	& img {
		max-width: 100%;
		border-radius: var(--border-radius-m);

		&.gui-image {
			max-width: calc(100% - 30px);
			box-shadow:
				0 3px 10px -3px #0005,
				0 10px 22px -4px #0007;
		}
	}

	& .custom-block {
		border-radius: var(--border-radius-m);
	}

	& iframe.ta-download-frame {
		width: 100%;
		height: 600px;
		border: unset;
		border-radius: var(--border-radius-m);
	}

	& details {
		--gap: var(--gap-l);
		margin-block-end: var(--gap-m);
		padding: var(--gap);
		background: var(--vp-badge-info-bg);
		border-radius: var(--border-radius-m);

		& summary {
			margin: calc(var(--gap) * -1);
			padding: var(--gap);
			border-radius: inherit;
			cursor: pointer;
			user-select: none;
		}
	}
}
</style>
