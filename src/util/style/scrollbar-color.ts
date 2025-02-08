import type { TScrollbarColor } from '../../type'

export const normalizeScrollbarColor = (
  scrollbarColor: TScrollbarColor
): string => {
  if (!scrollbarColor) {
    return 'auto' // Default value
  }
  return scrollbarColor
}
