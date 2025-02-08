import type { TTextWrap } from '../../type'

export const normalizeTextWrap = (textWrap: TTextWrap): string => {
  if (!textWrap) {
    return 'wrap' // Default value
  }
  return textWrap
}
