import type { TFontVariantAlternates } from '../../type'

export const normalizeFontVariantAlternates = (
  fontVariantAlternates: TFontVariantAlternates
): string => {
  if (!fontVariantAlternates) {
    return 'normal' // Default value
  }
  return fontVariantAlternates
}
