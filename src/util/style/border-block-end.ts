import type { TBorderBlockEnd } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderBlockEnd = (
  borderBlockEnd: TBorderBlockEnd
): string => {
  if (typeof borderBlockEnd === 'string') {
    return borderBlockEnd
  }

  if (borderBlockEnd === null || borderBlockEnd === undefined) {
    return 'none'
  }

  if (typeof borderBlockEnd === 'object') {
    const {
      width = 'medium',
      style = 'none',
      color = 'currentcolor',
    } = borderBlockEnd

    const widthValue =
      isPx(String(width)) || typeof width === 'number'
        ? convertToRem(width)
        : width

    return [widthValue, style, color].join(' ')
  }

  return 'medium none currentcolor'
}
