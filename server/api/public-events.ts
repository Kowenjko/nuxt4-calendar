export default defineEventHandler(async (event) => {
	const { clerkUserId } = await readBody(event)

	try {
		const events = await db.query.EventTable.findMany({
			where: ({ clerkUserId: userIdCol, isActive }, { eq, and }) => and(eq(userIdCol, clerkUserId), eq(isActive, true)),
			orderBy: ({ name }, { asc, sql }) => asc(sql`lower(${name})`),
		})

		return { message: 'Get public event successfully', data: events as PublicEvent[] }
	} catch (error) {
		console.log(error)
		errorHandler(500, 'Internal Error.')
	}
})
