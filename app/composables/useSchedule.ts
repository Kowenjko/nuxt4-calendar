import type { ScheduleAvailabilityTable, ScheduleTable } from '~~/server/database/schema'

export const useSchedule = () => {
	type ScheduleRow = typeof ScheduleTable.$inferSelect
	type AvailabilityRow = typeof ScheduleAvailabilityTable.$inferSelect

	const getAvailabilities = () => {}
}
