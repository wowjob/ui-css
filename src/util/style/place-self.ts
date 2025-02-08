import type { TPlaceSelf } from '../../type'

export const normalizePlaceSelf = (value: TPlaceSelf): string => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
