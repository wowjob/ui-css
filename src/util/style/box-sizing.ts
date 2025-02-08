import type { TBoxSizing } from '../../type'

export const normalizeBoxSizing = (boxSizing: TBoxSizing): string => {
  if (!boxSizing) {
    return 'border-box' // Default value
  }
  return boxSizing.toString()
}
