import type { TOffsetAnchor } from '../../type'

export const normalizeOffsetAnchor = (value: TOffsetAnchor): string => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
