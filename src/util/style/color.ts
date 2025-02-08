import type { TColor } from '../../type'

export const normalizeColor = (color: TColor): string => {
  if (!color) {
    return 'currentcolor' // Default value
  }
  return color
}
