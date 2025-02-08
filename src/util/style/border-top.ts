import type { TBorderTop } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderTop = (borderTop: TBorderTop): string => {
  if (typeof borderTop === 'string') {
    return borderTop
  }

  if (borderTop === null || borderTop === undefined) {
    return 'none'
  }

  if (typeof borderTop === 'object') {
    const {
      color = 'currentcolor',
      style = 'none',
      width = 'medium',
    } = borderTop

    const formattedWidth =
      isPx(String(width)) || typeof width === 'number'
        ? convertToRem(width)
        : width

    return [formattedWidth, style, color].join(' ')
  }

  return 'none'
}
