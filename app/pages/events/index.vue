<script lang="ts" setup>
import { CalendarPlus } from 'lucide-vue-next'

definePageMeta({
	middleware: 'auth',
})
</script>

<template>
	<section>
		<div class="flex gap-4 items-baseline">
			<h1 class="text-4xl xl:text-5xl font-black mb-6">Events</h1>

			<Button
				class="flex bg-blue-500 hover:bg-blue-400 text-white py-6 hover:scale-110 duration-500 border-b-4 border-blue-700 hover:border-blue-500 rounded-2xl shadow-accent-foreground text-2xl font-black"
				asChild
			>
				<nuxt-link to="/events/new"> <CalendarPlus class="mr-4 size-7" /> Create Event </nuxt-link>
			</Button>
		</div>
	</section>
</template>
