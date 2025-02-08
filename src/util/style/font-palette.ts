import type { TFontPalette } from '../../type'

export const normalizeFontPalette = (fontPalette: TFontPalette): string => {
  if (!fontPalette) {
    return 'normal' // Default value
  }
  return fontPalette
}
