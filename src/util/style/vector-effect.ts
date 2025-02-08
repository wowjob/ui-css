import type { TVectorEffect } from '../../type'

export const normalizeVectorEffect = (vectorEffect: TVectorEffect): string => {
  if (!vectorEffect) {
    return 'none' // Default value
  }
  return vectorEffect
}
