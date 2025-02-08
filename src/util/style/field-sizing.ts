import type { TFieldSizing } from '../../type'

export const normalizeFieldSizing = (fieldSizing: TFieldSizing): string => {
  if (!fieldSizing) {
    return 'content' // Default value
  }
  return fieldSizing
}
