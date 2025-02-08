import type { TScale } from '../../type'

export const normalizeScale = (value: TScale): string => {
  if (!value || value === 'none') {
    return 'none' // Default value
  }

  if (typeof value === 'string' || typeof value === 'number') {
    return value.toString()
  }

  return value
}
