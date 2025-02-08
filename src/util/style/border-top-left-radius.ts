import type { TBorderTopLeftRadius } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderTopLeftRadius = (
  borderTopLeftRadius: TBorderTopLeftRadius
): string => {
  if (typeof borderTopLeftRadius === 'string') {
    return isPx(borderTopLeftRadius)
      ? convertToRem(borderTopLeftRadius)
      : borderTopLeftRadius
  }

  if (typeof borderTopLeftRadius === 'number') {
    return convertToRem(borderTopLeftRadius)
  }

  if (borderTopLeftRadius === null || borderTopLeftRadius === undefined) {
    return '0'
  }

  return borderTopLeftRadius
}
