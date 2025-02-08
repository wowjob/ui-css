import type { TBorderStartEndRadius } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderStartEndRadius = (
  borderStartEndRadius: TBorderStartEndRadius
): string => {
  if (typeof borderStartEndRadius === 'string') {
    return isPx(borderStartEndRadius)
      ? convertToRem(borderStartEndRadius)
      : borderStartEndRadius
  }

  if (typeof borderStartEndRadius === 'number') {
    return convertToRem(borderStartEndRadius)
  }

  if (borderStartEndRadius === null || borderStartEndRadius === undefined) {
    return '0'
  }

  return borderStartEndRadius
}
