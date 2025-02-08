import type { TFontVariantCaps } from '../../type'

export const normalizeFontVariantCaps = (
  fontVariantCaps: TFontVariantCaps
): string => {
  if (!fontVariantCaps) {
    return 'normal' // Default value
  }
  return fontVariantCaps
}
