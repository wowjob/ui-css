import type { TFontOpticalSizing } from '../../type'

export const normalizeFontOpticalSizing = (
  fontOpticalSizing: TFontOpticalSizing
): string => {
  if (!fontOpticalSizing) {
    return 'auto' // Default value
  }
  return fontOpticalSizing
}
