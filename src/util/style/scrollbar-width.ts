import type { TScrollbarWidth } from '../../type'

export const normalizeScrollbarWidth = (
  scrollbarWidth: TScrollbarWidth
): string => {
  if (!scrollbarWidth) {
    return 'auto' // Default value
  }
  return scrollbarWidth
}
