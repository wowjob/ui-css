import type { TBorderLeft } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderLeft = (borderLeft: TBorderLeft): string => {
  if (typeof borderLeft === 'string') {
    return borderLeft
  }

  if (borderLeft === null || borderLeft === undefined) {
    return 'none'
  }

  if (typeof borderLeft === 'object') {
    const {
      color = 'currentcolor',
      style = 'none',
      width = 'medium',
    } = borderLeft

    const formattedWidth =
      isPx(String(width)) || typeof width === 'number'
        ? convertToRem(width)
        : width

    return [formattedWidth, style, color].join(' ')
  }

  return 'none'
}
