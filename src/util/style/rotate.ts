import type { TRotate } from '../../type'

export const normalizeRotate = (value: TRotate): string => {
  if (!value || value === 'none') {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
