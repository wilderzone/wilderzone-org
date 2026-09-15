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

	css: ["~/assets/css/root.css"],
	modules: ["@nuxt/icon", "@nuxt/content"],
	components: [
		'~/components',
		{ path: '~/pages', pattern: '**/components/**', pathPrefix: true }
	]
});
