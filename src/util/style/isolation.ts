import type { TIsolation } from '../../type'

export const normalizeIsolation = (value: TIsolation): string => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
