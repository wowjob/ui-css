import type { TScrollSnapStop } from '../../type'

export const normalizeScrollSnapStop = (
  scrollSnapStop: TScrollSnapStop
): string => {
  if (!scrollSnapStop) {
    return 'normal' // Default value
  }
  return scrollSnapStop
}
