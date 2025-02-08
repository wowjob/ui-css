import type { TFontStretch } from '../../type'

export const normalizeFontStretch = (fontStretch: TFontStretch): string => {
  if (!fontStretch) {
    return 'normal' // Default value
  }
  return fontStretch
}
