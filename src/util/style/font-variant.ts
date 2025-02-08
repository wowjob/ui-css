import type { TFontVariant } from '../../type'

export const normalizeFontVariant = (fontVariant: TFontVariant): string => {
  if (!fontVariant) {
    return 'normal' // Default value for font-variant
  }
  return fontVariant
}
