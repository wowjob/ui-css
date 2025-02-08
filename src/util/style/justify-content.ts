import type { TJustifyContent } from '../../type'

export const normalizeJustifyContent = (value: TJustifyContent): string => {
  if (!value || value === 'normal') {
    return 'normal' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
