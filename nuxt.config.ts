// https://nuxt.com/docs/api/configuration/nuxt-config

import { dark, neobrutalism } from '@clerk/themes'

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: [
		'@nuxt/image',
		'@nuxtjs/tailwindcss',
		// '@prisma/nuxt',
		'@clerk/nuxt',
	],
	clerk: {
		appearance: {
			baseTheme: neobrutalism,
		},
	},
})
