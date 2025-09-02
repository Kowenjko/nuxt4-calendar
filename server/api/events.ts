export default defineEventHandler(async (event) => {
	const { userId } = event.context.auth()

	try {
		const events = await db.query.EventTable.findMany({
			where: ({ clerkUserId: userIdCol }, { eq }) => eq(userIdCol, userId!),
			orderBy: ({ name }, { asc, sql }) => asc(sql`lower(${name})`),
		})

		return { message: 'Get events successfully', data: events }
	} catch (error) {
		console.log(error)
		errorHandler(500, 'Internal Error.')
	}
})
