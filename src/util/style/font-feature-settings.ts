import type { TFontFeatureSettings } from '../../type'

export const normalizeFontFeatureSettings = (
  fontFeatureSettings: TFontFeatureSettings
): string => {
  if (!fontFeatureSettings) {
    return 'normal' // Default value
  }
  return fontFeatureSettings
}
