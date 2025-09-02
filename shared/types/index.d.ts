export type PublicEvent = Omit<EventRow, 'isActive'> & { isActive: true }
