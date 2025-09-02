<script lang="ts" setup>
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} - Calendar` : 'Calendar'
	},
	meta: [
		{
			name: 'description',
			content:
				'Calendra is a simple and efficient calendar app that helps you manage your events, meetings, and schedules with ease. Stay organized and never miss an important date again!',
		},
	],
})
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
		<ClientOnly>
			<Toaster />
		</ClientOnly>
	</NuxtLayout>
</template>
