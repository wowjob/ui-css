import type { TDirection } from '../../type'

export const normalizeDirection = (direction: TDirection): string => {
  if (!direction) {
    return 'ltr' // Default value
  }
  return direction
}
