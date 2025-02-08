import type { TTextTransform } from '../../type'

export const normalizeTextTransform = (
  textTransform: TTextTransform
): string => {
  if (!textTransform) {
    return 'none' // Default value
  }
  return textTransform
}
