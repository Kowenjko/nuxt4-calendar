<script lang="ts" setup>
import { useForm } from 'vee-validate'

import { toTypedSchema } from '@vee-validate/zod'

interface Props {
	event?: {
		id: string
		name: string
		description: string
		durationInMinutes: number
		isActive: boolean
	}
}

const { event } = defineProps<Props>()

const form = useForm({
	validationSchema: toTypedSchema(eventFormSchema), // Validate with Zod schema
	initialValues: event
		? {
				// If `event` is provided (edit mode), spread its existing properties as default values
				...event,
		  }
		: {
				// If `event` is not provided (create mode), use these fallback defaults
				isActive: true, // New events are active by default
				durationInMinutes: 30, // Default duration is 30 minutes
				description: '', // Ensure controlled input: default to empty string
				name: '', // Ensure controlled input: default to empty string
		  },
})

const { createEvent, updateEvent, deleteEvent } = useEvents()

const onSubmit = form.handleSubmit(async (values) => {
	!event ? await createEvent(values) : await updateEvent(event.id, values)

	navigateTo('/events')
})

const deleteEventSubmit = async () => {
	await deleteEvent(event!.id)
}
</script>

<template>
	<form class="flex gap-6 flex-col" @submit="onSubmit">
		<!-- Event Name Field -->
		<FormField v-slot="{ componentField }" name="name">
			<FormItem>
				<FormLabel>Event Name</FormLabel>
				<FormControl>
					<Input v-bind="componentField" placeholder="Event name" />
				</FormControl>
				<FormDescription>The name users will see when booking </FormDescription>
				<FormMessage />
			</FormItem>
		</FormField>
		<!-- Duration Field -->
		<FormField v-slot="{ componentField }" name="durationInMinutes">
			<FormItem>
				<FormLabel>Duration</FormLabel>
				<FormControl>
					<Input v-bind="componentField" type="number" />
				</FormControl>
				<FormDescription>In minutes </FormDescription>
				<FormMessage />
			</FormItem>
		</FormField>
		<!-- Optional Description Field  -->
		<FormField v-slot="{ componentField }" name="description">
			<FormItem>
				<FormLabel>Description</FormLabel>
				<FormControl>
					<Textarea v-bind="componentField" />
				</FormControl>
				<FormDescription>Optional description of the event</FormDescription>
				<FormMessage />
			</FormItem>
		</FormField>
		<!-- Toggle for Active Status -->
		<FormField v-slot="{ value, handleChange }" name="isActive">
			<FormItem>
				<div class="flex items-center gap-2">
					<FormControl>
						<Switch :model-value="value" @update:model-value="handleChange" />
					</FormControl>
					<FormLabel>Active</FormLabel>
				</div>
				<FormDescription> Inactive events will not be visible for users to book</FormDescription>
			</FormItem>
		</FormField>

		<!-- Buttons section: Delete, Cancel, Save -->
		<div class="flex gap-2 justify-end">
			<AlertDialog v-if="event">
				<AlertDialogTrigger as-child>
					<Button
						class="cursor-pointer hover:scale-105 hover:bg-red-700"
						variant="destructive"
						:disabled="form.isSubmitting"
					>
						Delete
					</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Are you sure?</AlertDialogTitle>
						<AlertDialogDescription>
							This action cannot be undone. This will permanently delete this event.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction
							class="bg-red-500 hover:bg-red-700 cursor-pointer"
							@click="deleteEventSubmit"
							:disabled="form.isSubmitting"
						>
							Delete
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>

			<!-- Cancel Button - redirects to events list -->
			<Button type="button" asChild variant="outline" :disabled="form.isSubmitting">
				<nuxt-link to="/events">Cancel</nuxt-link>
			</Button>

			<!-- Save Button - submits the form -->
			<Button
				class="cursor-pointer hover:scale-105 bg-blue-400 hover:bg-blue-600"
				:disabled="!form.meta.value.valid && form.isSubmitting"
				type="submit"
			>
				{{ event ? 'Save Changes' : 'Create Event' }}
			</Button>
		</div>
	</form>
</template>
