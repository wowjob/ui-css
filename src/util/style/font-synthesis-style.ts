import type { TFontSynthesisStyle } from '../../type'

export const normalizeFontSynthesisStyle = (
  fontSynthesisStyle: TFontSynthesisStyle
): string => {
  if (!fontSynthesisStyle) {
    return 'auto' // Default value
  }
  return fontSynthesisStyle
}
