import type { TFontStyle } from '../../type'

export const normalizeFontStyle = (fontStyle: TFontStyle): string => {
  if (!fontStyle) {
    return 'normal' // Default value
  }
  return fontStyle
}
