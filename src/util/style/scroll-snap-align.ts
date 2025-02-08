import type { TScrollSnapAlign } from '../../type'

export const normalizeScrollSnapAlign = (
  scrollSnapAlign: TScrollSnapAlign
): string => {
  if (!scrollSnapAlign) {
    return 'none' // Default value
  }
  return scrollSnapAlign
}
