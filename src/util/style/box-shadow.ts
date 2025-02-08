import type { TBoxShadow } from '../../type'

export const normalizeBoxShadow = (boxShadow: TBoxShadow): string => {
  if (boxShadow === null || boxShadow === undefined) {
    return 'none'
  }

  // If boxShadow is an array, join values with a comma
  if (Array.isArray(boxShadow)) {
    return boxShadow.join(', ')
  }

  // Return valid single shadow or keyword values as-is
  return boxShadow.toString()
}
