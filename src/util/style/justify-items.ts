import type { TJustifyItems } from '../../type'

export const normalizeJustifyItems = (value: TJustifyItems): string => {
  if (!value || value === 'normal') {
    return 'normal' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
