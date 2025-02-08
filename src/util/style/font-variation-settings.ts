import type { TFontVariationSettings } from '../../type'

export const normalizeFontVariationSettings = (
  fontVariationSettings: TFontVariationSettings
): string => {
  if (!fontVariationSettings) {
    return 'normal' // Default value
  }
  return fontVariationSettings
}
