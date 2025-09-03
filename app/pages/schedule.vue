<script lang="ts" setup>
definePageMeta({
	middleware: 'auth',
})
</script>

<template>
	<Card class="max-w-md mx-auto border-8 border-blue-200 shadow-2xl shadow-accent-foreground">
		<CardHeader>
			<CardTitle>Schedule</CardTitle>
		</CardHeader>
		<CardContent>
			<FormsSchedule :schedule="null" />
		</CardContent>
	</Card>
</template>
