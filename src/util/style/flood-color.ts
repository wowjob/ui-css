import type { TFloodColor } from '../../type'

export const normalizeFloodColor = (floodColor: TFloodColor): string => {
  if (!floodColor) {
    return 'currentcolor' // Default value
  }
  return floodColor
}
