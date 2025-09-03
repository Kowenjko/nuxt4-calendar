import { toast } from 'vue-sonner'

export const useEvents = () => {
	const events = ref<any>([])
	const event = ref<any>(null)

	const route = useRoute()

	const getEvent = async () => {
		try {
			const response = await $fetch(`/api/events/${route.params.id}`)

			event.value = response?.data || null

			toast(response?.message!)
		} catch (error) {
			//@ts-ignore
			toast(error?.statusMessage)
		}
	}
	const getEvents = async () => {
		try {
			const response = await $fetch('/api/events')

			events.value = response?.data || []

			toast(response?.message!)
		} catch (error) {
			//@ts-ignore
			toast(error?.statusMessage)
		}
	}

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

	return { createEvent, updateEvent, deleteEvent, events, getEvents, getEvent, event }
}
