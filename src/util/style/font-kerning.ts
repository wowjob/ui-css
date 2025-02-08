import type { TFontKerning } from '../../type'

export const normalizeFontKerning = (fontKerning: TFontKerning): string => {
  if (!fontKerning) {
    return 'auto' // Default value
  }
  return fontKerning
}
