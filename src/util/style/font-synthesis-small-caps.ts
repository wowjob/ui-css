import type { TFontSynthesisSmallCaps } from '../../type'

export const normalizeFontSynthesisSmallCaps = (
  fontSynthesisSmallCaps: TFontSynthesisSmallCaps
): string => {
  if (!fontSynthesisSmallCaps) {
    return 'auto' // Default value
  }
  return fontSynthesisSmallCaps
}
