import type { TBorderInline } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderInline = (borderInline: TBorderInline): string => {
  if (typeof borderInline === 'string') {
    return borderInline
  }

  if (borderInline === null || borderInline === undefined) {
    return 'none'
  }

  if (typeof borderInline === 'object') {
    const {
      width = 'medium',
      style = 'none',
      color = 'currentcolor',
    } = borderInline

    const widthValue =
      isPx(String(width)) || typeof width === 'number'
        ? convertToRem(width)
        : width

    return [widthValue, style, color].join(' ')
  }

  return 'medium none currentcolor'
}
