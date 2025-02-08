import type { TObjectPosition } from '../../type'

export const normalizeObjectPosition = (value: TObjectPosition): string => {
  if (!value || value === 'center') {
    return 'center' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
