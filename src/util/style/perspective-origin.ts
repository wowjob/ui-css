import type { TPerspectiveOrigin } from '../../type'

export const normalizePerspectiveOrigin = (
  value: TPerspectiveOrigin
): string => {
  if (!value || value === 'center') {
    return 'center' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
