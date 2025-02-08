import type { TPlaceItems } from '../../type'

export const normalizePlaceItems = (value: TPlaceItems): string => {
  if (!value || value === 'normal') {
    return 'normal' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
