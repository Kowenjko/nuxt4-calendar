<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'

import * as z from 'zod'
import { eventFormSchema } from '~/utils/schema/events'

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

const form = useForm<z.infer<typeof eventFormSchema>>({
	validationSchema: eventFormSchema, // Validate with Zod schema
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

const onSubmit = (values: any) => {
	console.log(values)
}
</script>

<template>
	<Form :validation-schema="eventFormSchema" class="flex gap-6 flex-col" @submit="onSubmit"> </Form>
</template>
