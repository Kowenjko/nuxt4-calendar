<script lang="ts" setup>
const { getEvent, event } = useEvents()

await getEvent()

definePageMeta({
	middleware: 'auth',
})
</script>

<template>
	<Card class="max-w-md mx-auto border-4 border-blue-100 shadow-2xl shadow-accent-foreground">
		<CardHeader>
			<CardTitle>Edit Event</CardTitle>
		</CardHeader>
		<CardContent>
			<FormsEvent v-if="event" :event />
		</CardContent>
	</Card>
</template>
