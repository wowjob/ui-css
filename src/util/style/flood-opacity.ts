import type { TFloodOpacity } from '../../type'

export const normalizeFloodOpacity = (floodOpacity: TFloodOpacity): string => {
  if (!floodOpacity) {
    return '1' // Default value (100% opacity)
  }
  return floodOpacity.toString()
}
