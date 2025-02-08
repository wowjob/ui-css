import type { TPosition } from '../../type'

export const normalizePosition = (value: TPosition): string => {
  if (!value || value === 'static') {
    return 'static' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
