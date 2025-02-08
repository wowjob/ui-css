import type { TContainIntrinsicWidth } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeContainIntrinsicWidth = (
  containIntrinsicWidth: TContainIntrinsicWidth
): string => {
  if (!containIntrinsicWidth) {
    return 'none' // Default value
  }

  if (
    (typeof containIntrinsicWidth === 'string' &&
      isPx(containIntrinsicWidth)) ||
    typeof containIntrinsicWidth === 'number'
  ) {
    return convertToRem(containIntrinsicWidth)
  }

  return containIntrinsicWidth
}
