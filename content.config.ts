import { defineContentConfig, defineCollection, z } from '@nuxt/content';

// Extra frontmatter fields for page collections. Every collection used with `useSectionNavigation` needs the `order` field.
const pageSchema = z.object({
	// Position among sibling pages in the navigation. A folder takes the order of its index page.
	order: z.number().optional(),
});

export default defineContentConfig({
	collections: {
		wiki: defineCollection({
			type: 'page',
			source: 'wiki/**/*.md',
			schema: pageSchema,
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
						branch: 'main'
					},
					include: 'docs/**/*.md',
					prefix: '/docs/ta-installer',
				},
			],
			schema: pageSchema,
		}),
	},
});
