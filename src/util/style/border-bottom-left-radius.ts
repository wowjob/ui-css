import type { TBorderBottomLeftRadius } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderBottomLeftRadius = (
  borderBottomLeftRadius: TBorderBottomLeftRadius
): string => {
  if (typeof borderBottomLeftRadius === 'string') {
    return isPx(borderBottomLeftRadius)
      ? convertToRem(borderBottomLeftRadius)
      : borderBottomLeftRadius
  }

  if (typeof borderBottomLeftRadius === 'number') {
    return convertToRem(borderBottomLeftRadius)
  }

  if (borderBottomLeftRadius === null || borderBottomLeftRadius === undefined) {
    return '0'
  }

  return borderBottomLeftRadius
}
