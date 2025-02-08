import type { TTextShadow } from '../../type'

export const normalizeTextShadow = (textShadow: TTextShadow): string => {
  if (!textShadow) {
    return 'none' // Default value
  }
  return textShadow
}
