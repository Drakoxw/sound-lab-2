
/**
 * Delete property and return a new object
 */
export function omit(
  dictionary: Record<string, any>,
  propToRemove: string = ''
) {
  return Object.fromEntries(
    Object.entries(dictionary).filter(([key]) => key !== propToRemove)
  )
}
