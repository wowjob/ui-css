import type { TTextUnderlineOffset } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeTextUnderlineOffset = (
  textUnderlineOffset: TTextUnderlineOffset
): string => {
  if (!textUnderlineOffset || textUnderlineOffset === 'auto') {
    return 'auto' // Default value
  }

  if (typeof textUnderlineOffset === 'string' && isPx(textUnderlineOffset)) {
    return convertToRem(textUnderlineOffset)
  }

  if (typeof textUnderlineOffset === 'number') {
    return convertToRem(textUnderlineOffset)
  }

  return textUnderlineOffset.toString()
}
