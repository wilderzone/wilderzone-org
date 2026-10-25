// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },

	nitro: {
		preset: "cloudflare-module",

		cloudflare: {
			deployConfig: true,
			nodeCompat: true
		}
	},

	content: {
		database: {
			type: 'd1',
			bindingName: 'WIKI_DB'
		}
	},

	hooks: {
		// Docs pulled from other repos link relative to their own docs root, so mount them under their site prefix.
		// File ids are "<collection>/<source prefix>/<file>", e.g. "docs/docs/ta-installer/cli/options.md".
		'content:file:beforeParse'({ file }) {
			if (file.id.startsWith('docs/docs/ta-installer/')) {
				file.body = file.body
					.replaceAll('src="/assets/', 'src="https://raw.githubusercontent.com/wilderzone/ta-installer/documentation/docs/assets/')
					.replaceAll('](/', '](/docs/ta-installer/');
			}
		}
	},

	css:["~/assets/css/root.css"],
	modules: ["@nuxt/icon", "@nuxt/content"],
	components: [
		'~/components',
		{ path: '~/pages', pattern: '**/components/**', pathPrefix: true }
	],

	app: {
		head: {
			title: "Wilderzone.org"
		}
	}
});
