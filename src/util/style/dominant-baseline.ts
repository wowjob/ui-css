import type { TDominantBaseline } from '../../type'

export const normalizeDominantBaseline = (
  dominantBaseline: TDominantBaseline
): string => {
  if (!dominantBaseline) {
    return 'auto' // Default value
  }
  return dominantBaseline
}
