<script lang="ts" setup>
interface EventCardProps {
	event: {
		id: string
		isActive: boolean
		name: string
		description: string | null
		durationInMinutes: number
		clerkUserId: string
	}
}

const props = defineProps<EventCardProps>()
</script>

<template>
	<Card
		class="flex flex-col border-4 border-blue-500/10 shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
		:class="{ 'bg-accent border-accent': event.isActive }"
	>
		<CardHeader :class="{ 'opacity-50': event.isActive }">
			<CardTitle>{{ event.name }}</CardTitle>
			<CardDescription>{{ formatEventDescription(event.durationInMinutes) }} </CardDescription>
		</CardHeader>

		<CardContent v-if="event.description">
			{{ event.description }}
		</CardContent>

		<CardFooter class="flex justify-end gap-2 mt-auto">
			<CopyEventButton v-if="event.isActive" variant="outline" :eventId="event.id" :clerkUserId="event.clerkUserId" />

			<Button class="cursor-pointer hover:scale-105 bg-blue-400 hover:bg-blue-600" asChild>
				<nuxt-link :to="`/events/${event.id}/edit`">Edit</nuxt-link>
			</Button>
		</CardFooter>
	</Card>
</template>
