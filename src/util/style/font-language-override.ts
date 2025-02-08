import type { TFontLanguageOverride } from '../../type'

export const normalizeFontLanguageOverride = (
  fontLanguageOverride: TFontLanguageOverride
): string => {
  if (!fontLanguageOverride) {
    return 'normal' // Default value
  }
  return fontLanguageOverride
}
