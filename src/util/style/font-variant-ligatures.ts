import type { TFontVariantLigatures } from '../../type'

export const normalizeFontVariantLigatures = (
  fontVariantLigatures: TFontVariantLigatures
): string => {
  if (!fontVariantLigatures) {
    return 'normal' // Default value
  }
  return fontVariantLigatures
}
