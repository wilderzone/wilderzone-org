// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },

	nitro: {
		preset: "cloudflare-pages",

		cloudflare: {
			deployConfig: true,
			nodeCompat: true
		}
	},

	css: ["~/assets/css/root.css"],
	modules: ["nitro-cloudflare-dev"]
});
