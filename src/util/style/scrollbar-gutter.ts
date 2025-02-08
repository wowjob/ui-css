import type { TScrollbarGutter } from '../../type'

export const normalizeScrollbarGutter = (
  scrollbarGutter: TScrollbarGutter
): string => {
  if (!scrollbarGutter) {
    return 'auto' // Default value
  }
  return scrollbarGutter
}
