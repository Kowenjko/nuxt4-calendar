<script lang="ts" setup>
import { CalendarPlus, CalendarRange } from 'lucide-vue-next'

const { events, getEvents } = useEvents()

definePageMeta({
	middleware: 'auth',
})

onMounted(async () => {
	await getEvents()
})
</script>

<template>
	<section>
		<div class="flex justify-center gap-4 items-baseline">
			<h1 class="text-4xl xl:text-5xl font-black mb-6">Events</h1>

			<Button
				class="flex bg-blue-500 hover:bg-blue-400 text-white py-6 hover:scale-110 duration-500 border-b-4 border-blue-700 hover:border-blue-500 rounded-2xl shadow-accent-foreground text-2xl font-black"
				asChild
			>
				<nuxt-link to="/events/new"> <CalendarPlus class="mr-4 size-7" /> Create Event </nuxt-link>
			</Button>
		</div>
		<div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10" v-if="events.length > 0">
			<EventCard v-for="event in events" :key="event.id" :event />
		</div>

		<div v-else class="flex flex-col items-center gap-4">
			<CalendarRange class="size-16 mx-auto text-black" />
			You do not have any events yet. Create your first event to get started!
			<Button
				class="bg-blue-500 hover:bg-blue-400 text-white py-6 hover:scale-110 duration-500 border-b-4 border-blue-700 hover:border-blue-500 rounded-2xl shadow-accent-foreground shadow-2xl text-2xl font-black"
				asChild
			>
				<nuxt-link to="/events/new"> <CalendarPlus class="mr-4 size-7" /> New Event </nuxt-link>
			</Button>
		</div>
	</section>
</template>
