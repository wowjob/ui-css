import type { TScrollSnapType } from '../../type'

export const normalizeScrollSnapType = (
  scrollSnapType: TScrollSnapType
): string => {
  if (!scrollSnapType) {
    return 'none' // Default value
  }
  return scrollSnapType
}
