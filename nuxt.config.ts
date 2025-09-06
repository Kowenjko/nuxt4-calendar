// https://nuxt.com/docs/api/configuration/nuxt-config

import { dark, neobrutalism } from '@clerk/themes'

import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: ['~/assets/css/main.css', 'vue-sonner/style.css'],
	ssr: false,
	modules: [
		'@nuxt/image',
		// '@prisma/nuxt',
		'@clerk/nuxt',
		'shadcn-nuxt',
		'@vueuse/nuxt',
	],
	clerk: {
		appearance: {
			baseTheme: neobrutalism,
		},
	},

	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: '',
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: './app/components/ui',
	},
	vite: {
		plugins: [tailwindcss()],
	},
	runtimeConfig: {
		clerkSecretKey: process.env.NUXT_CLERK_SECRET_KEY,
		public: {
			clerkPublishableKey: process.env.NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
		},
	},
})
