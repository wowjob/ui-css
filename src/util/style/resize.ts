import type { TResize } from '../../type'

export const normalizeResize = (value: TResize): string => {
  if (!value || value === 'none') {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
