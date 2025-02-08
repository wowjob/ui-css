import type { TTextJustify } from '../../type'

export const normalizeTextJustify = (textJustify: TTextJustify): string => {
  if (!textJustify) {
    return 'auto' // Default value
  }
  return textJustify
}
