import type { TMaskClip } from '../../type'

export const normalizeMaskClip = (value: TMaskClip): string => {
  if (!value) {
    return 'content-box' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  if (Array.isArray(value)) {
    return value.join(', ')
  }

  return value
}
