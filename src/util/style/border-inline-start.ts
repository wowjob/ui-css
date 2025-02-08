import type { TBorderInlineStart } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderInlineStart = (
  borderInlineStart: TBorderInlineStart
): string => {
  if (typeof borderInlineStart === 'string') {
    return borderInlineStart
  }

  if (borderInlineStart === null || borderInlineStart === undefined) {
    return 'none'
  }

  if (typeof borderInlineStart === 'object') {
    const {
      width = 'medium',
      style = 'none',
      color = 'currentcolor',
    } = borderInlineStart

    const widthValue =
      isPx(String(width)) || typeof width === 'number'
        ? convertToRem(width)
        : width

    return [widthValue, style, color].join(' ')
  }

  return 'medium none currentcolor'
}
