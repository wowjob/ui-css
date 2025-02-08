import type { TTextWrapStyle } from '../../type'

export const normalizeTextWrapStyle = (
  textWrapStyle: TTextWrapStyle
): string => {
  if (!textWrapStyle) {
    return 'auto' // Default value
  }
  return textWrapStyle
}
