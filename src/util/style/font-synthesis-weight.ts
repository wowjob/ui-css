import type { TFontSynthesisWeight } from '../../type'

export const normalizeFontSynthesisWeight = (
  fontSynthesisWeight: TFontSynthesisWeight
): string => {
  if (!fontSynthesisWeight) {
    return 'auto' // Default value
  }
  return fontSynthesisWeight
}
