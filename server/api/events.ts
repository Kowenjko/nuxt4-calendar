export default defineEventHandler(async (event) => {
	const { clerkUserId } = await readBody(event)

	try {
		const events = await db.query.EventTable.findMany({
			where: ({ clerkUserId: userIdCol }, { eq }) => eq(userIdCol, clerkUserId),
			orderBy: ({ name }, { asc, sql }) => asc(sql`lower(${name})`),
		})

		return { message: 'Get events successfully', data: events }
	} catch (error) {
		console.log(error)
		errorHandler(500, 'Internal Error.')
	}
})
