import type { THyphens } from '../../type'

export const normalizeHyphens = (value: THyphens): string => {
  if (!value || value === 'none') {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
