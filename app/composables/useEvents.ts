import { toast } from 'vue-sonner'

export const useEvents = () => {
	const events = ref([])

	const createEvent = async (values: any) => {
		try {
			const response = await $fetch('/api/events', {
				method: 'POST',
				body: values,
			})

			toast('Event has been created', {
				description: response?.message,
			})
		} catch (error) {
			//@ts-ignore
			toast(error?.statusMessage)
		}
	}

	const updateEvent = async (id: string, values: any) => {
		try {
			const response = await $fetch(`/api/events`, {
				method: 'PUT',
				body: { data: values, id },
			})

			toast('Event has been updated', {
				description: response?.message,
			})
		} catch (error) {
			//@ts-ignore
			toast(error?.statusMessage)
		}
	}

	const deleteEvent = async (id: string) => {
		try {
			const response = await $fetch(`/api/events`, {
				method: 'DELETE',
				body: { id },
			})

			toast('Event has been delete', {
				description: response?.message,
			})
			navigateTo('/events')
		} catch (error) {
			//@ts-ignore
			toast(error?.statusMessage)
		}
	}

	return { createEvent, updateEvent, deleteEvent, events }
}
