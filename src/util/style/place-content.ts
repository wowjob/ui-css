import type { TPlaceContent } from '../../type'

export const normalizePlaceContent = (value: TPlaceContent): string => {
  if (!value || value === 'stretch') {
    return 'stretch' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
