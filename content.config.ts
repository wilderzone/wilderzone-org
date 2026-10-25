import { defineContentConfig, defineCollection } from '@nuxt/content';

export default defineContentConfig({
	collections: {
		wiki: defineCollection({
			type: 'page',
			source: 'wiki/**/*.md'
		}),
		docs: defineCollection({
			type: 'page',
			source: [
				{
					include: 'docs/**/*.md',
				},
				{
					repository: {
						url: 'https://github.com/wilderzone/ta-installer',
						branch: 'documentation'
					},
					include: 'docs/**/*.md',
					prefix: '/docs/ta-installer',
				},
			],
		}),
	},
});
