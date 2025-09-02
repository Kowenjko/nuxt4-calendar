import { EventTable } from '../../server/database/schema'
import { errorHandler } from '../utils/errorHandler'

export default defineEventHandler(async (event) => {
	const body = await readValidatedBody(event, eventFormSchema.parse)

	const { userId } = event.context.auth()

	if (!userId) {
		errorHandler(401, 'Invalid event data or user not authenticated.')
	}

	try {
		await db.insert(EventTable).values({ ...body, clerkUserId: userId! })

		return { message: 'Event created successfully', data: body }
	} catch (error) {
		console.log(error)
		errorHandler(500, 'Internal Error.')
	}
})
