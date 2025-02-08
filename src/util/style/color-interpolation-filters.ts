import type { TColorInterpolationFilters } from '../../type'

export const normalizeColorInterpolationFilters = (
  colorInterpolationFilters: TColorInterpolationFilters
): string => {
  if (!colorInterpolationFilters) {
    return 'auto' // Default value
  }
  return colorInterpolationFilters
}
