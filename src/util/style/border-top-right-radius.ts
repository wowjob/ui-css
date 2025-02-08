import type { TBorderTopRightRadius } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderTopRightRadius = (
  borderTopRightRadius: TBorderTopRightRadius
): string => {
  if (typeof borderTopRightRadius === 'string') {
    return isPx(borderTopRightRadius)
      ? convertToRem(borderTopRightRadius)
      : borderTopRightRadius
  }

  if (typeof borderTopRightRadius === 'number') {
    return convertToRem(borderTopRightRadius)
  }

  if (borderTopRightRadius === null || borderTopRightRadius === undefined) {
    return '0'
  }

  return borderTopRightRadius
}
