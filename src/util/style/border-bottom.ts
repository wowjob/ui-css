import type { TBorderBottom } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderBottom = (borderBottom: TBorderBottom): string => {
  if (typeof borderBottom === 'string') {
    return isPx(borderBottom) ? convertToRem(borderBottom) : borderBottom
  }

  if (typeof borderBottom === 'number') {
    return convertToRem(borderBottom)
  }

  if (borderBottom === null || borderBottom === undefined) {
    return 'none'
  }

  if (typeof borderBottom === 'object') {
    const {
      color = 'currentcolor',
      style = 'none',
      width = 'medium',
    } = borderBottom

    const formattedWidth =
      isPx(String(width)) || typeof width === 'number'
        ? convertToRem(width)
        : width

    return [formattedWidth, style, color].join(' ')
  }

  return 'none'
}
