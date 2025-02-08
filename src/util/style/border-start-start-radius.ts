import type { TBorderStartStartRadius } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderStartStartRadius = (
  borderStartStartRadius: TBorderStartStartRadius
): string => {
  if (typeof borderStartStartRadius === 'string') {
    return isPx(borderStartStartRadius)
      ? convertToRem(borderStartStartRadius)
      : borderStartStartRadius
  }

  if (typeof borderStartStartRadius === 'number') {
    return convertToRem(borderStartStartRadius)
  }

  if (borderStartStartRadius === null || borderStartStartRadius === undefined) {
    return '0'
  }

  return borderStartStartRadius
}
