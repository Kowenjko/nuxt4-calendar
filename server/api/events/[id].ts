export default defineEventHandler(async (event) => {
	const { userId } = event.context.auth()
	const eventId = getRouterParam(event, 'id')

	try {
		const event = await db.query.EventTable.findFirst({
			where: ({ id, clerkUserId }, { and, eq }) => and(eq(clerkUserId, userId!), eq(id, eventId!)),
		})

		return { message: 'Get event successfully', data: event }
	} catch (error) {
		console.log(error)
		errorHandler(500, 'Internal Error.')
	}
})
