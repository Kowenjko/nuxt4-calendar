export const errorHandler = (statusCode: number, statusMessage: string) => {
	throw createError({ statusCode, statusMessage })
}
