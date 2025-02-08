import type { TFontSizeAdjust } from '../../type'

export const normalizeFontSizeAdjust = (
  fontSizeAdjust: TFontSizeAdjust
): string => {
  if (!fontSizeAdjust) {
    return 'none' // Default value
  }
  return fontSizeAdjust.toString()
}
