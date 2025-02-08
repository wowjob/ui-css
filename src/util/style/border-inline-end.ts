import type { TBorderInlineEnd } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderInlineEnd = (
  borderInlineEnd: TBorderInlineEnd
): string => {
  if (typeof borderInlineEnd === 'string') {
    return borderInlineEnd
  }

  if (borderInlineEnd === null || borderInlineEnd === undefined) {
    return 'none'
  }

  if (typeof borderInlineEnd === 'object') {
    const {
      width = 'medium',
      style = 'none',
      color = 'currentcolor',
    } = borderInlineEnd

    const widthValue =
      isPx(String(width)) || typeof width === 'number'
        ? convertToRem(width)
        : width

    return [widthValue, style, color].join(' ')
  }

  return 'medium none currentcolor'
}
