import type { TColorScheme } from '../../type'

export const normalizeColorScheme = (colorScheme: TColorScheme): string => {
  if (!colorScheme) {
    return 'normal' // Default value
  }
  return colorScheme
}
