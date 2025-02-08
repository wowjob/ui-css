import type { TLightingColor } from '../../type'

export const normalizeLightingColor = (value: TLightingColor): string => {
  if (!value) {
    return 'currentcolor' // Default to currentcolor
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
