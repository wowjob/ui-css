import type { TImageOrientation } from '../../type'

export const normalizeImageOrientation = (value: TImageOrientation): string => {
  if (!value || value === 'none') {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
