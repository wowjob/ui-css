import type { TTextAlignLast } from '../../type'

export const normalizeTextAlignLast = (
  textAlignLast: TTextAlignLast
): string => {
  if (!textAlignLast) {
    return 'auto' // Default value
  }
  return textAlignLast
}
