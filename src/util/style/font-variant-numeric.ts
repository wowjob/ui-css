import type { TFontVariantNumeric } from '../../type'

export const normalizeFontVariantNumeric = (
  fontVariantNumeric: TFontVariantNumeric
): string => {
  if (!fontVariantNumeric) {
    return 'normal' // Default value
  }
  return fontVariantNumeric
}
