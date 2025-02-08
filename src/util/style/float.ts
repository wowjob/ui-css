import type { TFloat } from '../../type'

export const normalizeFloat = (float: TFloat): string => {
  if (!float) {
    return 'none' // Default value
  }
  return float
}
