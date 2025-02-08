import type { TColorInterpolation } from '../../type'

export const normalizeColorInterpolation = (
  colorInterpolation: TColorInterpolation
): string => {
  if (!colorInterpolation) {
    return 'auto' // Default value
  }

  return colorInterpolation
}
