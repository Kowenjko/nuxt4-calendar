import { EventTable } from '../../database/schema'

export default defineEventHandler(async (event) => {
	const { id, data } = await readBody(event)
	const { userId } = event.context.auth()

	if (!userId) {
		errorHandler(401, 'Invalid event data or user not authenticated.')
	}

	try {
		const { rowCount } = await db
			.update(EventTable)
			.set(data)
			.where(and(eq(EventTable.id, id), eq(EventTable.clerkUserId, userId!)))

		if (rowCount === 0) {
			errorHandler(404, 'Event not found or user not authorized to update this event.')
		}

		return { message: 'Event updated successfully', data: data }
	} catch (error) {
		console.log(error)
		errorHandler(500, 'Internal Error.')
	}
})
