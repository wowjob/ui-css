import type { TFontVariantPosition } from '../../type'

export const normalizeFontVariantPosition = (
  fontVariantPosition: TFontVariantPosition
): string => {
  if (!fontVariantPosition) {
    return 'normal' // Default value
  }
  return fontVariantPosition
}
