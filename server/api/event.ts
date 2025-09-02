export default defineEventHandler(async (event) => {
	const { userId, eventId } = await readBody(event)

	try {
		const event = await db.query.EventTable.findFirst({
			where: ({ id, clerkUserId }, { and, eq }) => and(eq(clerkUserId, userId), eq(id, eventId)), // Make sure the event belongs to the user
		})

		return { message: 'Get event successfully', data: event }
	} catch (error) {
		console.log(error)
		errorHandler(500, 'Internal Error.')
	}
})
