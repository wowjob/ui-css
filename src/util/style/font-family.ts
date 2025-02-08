import type { TFontFamily } from '../../type'

export const normalizeFontFamily = (fontFamily: TFontFamily): string => {
  if (!fontFamily) {
    return 'inherit' // Default value for font-family
  }
  return fontFamily
}
