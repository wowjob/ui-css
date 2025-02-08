import type { TFontVariantEastAsian } from '../../type'

export const normalizeFontVariantEastAsian = (
  fontVariantEastAsian: TFontVariantEastAsian
): string => {
  if (!fontVariantEastAsian) {
    return 'normal' // Default value
  }
  return fontVariantEastAsian
}
