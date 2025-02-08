import type { TJustifySelf } from '../../type'

export const normalizeJustifySelf = (value: TJustifySelf): string => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
