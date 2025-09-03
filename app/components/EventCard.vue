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

const emit = defineEmits<{ deleted: [id: string] }>()

const { event } = defineProps<EventCardProps>()

const deleteEventSubmit = async () => {
	emit('deleted', event.id)
}
</script>

<template>
	<Card
		class="flex flex-col border-4 border-blue-500/10 shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
		:class="{ 'bg-accent border-accent': event.isActive }"
	>
		<CardHeader :class="{ 'opacity-50': event.isActive }">
			<CardTitle class="flex justify-between items-center">
				<span>{{ event.name }}</span>
				<DeleteEventButton v-if="event" @deleted="deleteEventSubmit" isIcon variant="outline" />
			</CardTitle>
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
