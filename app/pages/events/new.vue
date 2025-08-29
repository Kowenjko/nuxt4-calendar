<script lang="ts" setup>
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'

definePageMeta({
	middleware: 'auth',
})
</script>

<template>
	<Card class="max-w-md mx-auto border-8 border-blue-200 shadow-2xl shadow-accent-foreground">
		<CardHeader>
			<CardTitle>New Event</CardTitle>
		</CardHeader>

		<CardContent>
			<!-- <EventForm /> -->

			Event Form
		</CardContent>
	</Card>
</template>
