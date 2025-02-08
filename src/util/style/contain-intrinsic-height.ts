import type { TContainIntrinsicHeight } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeContainIntrinsicHeight = (
  containIntrinsicHeight: TContainIntrinsicHeight
): string => {
  if (!containIntrinsicHeight) {
    return 'none' // Default value
  }

  if (
    (typeof containIntrinsicHeight === 'string' &&
      isPx(containIntrinsicHeight)) ||
    typeof containIntrinsicHeight === 'number'
  ) {
    return convertToRem(containIntrinsicHeight)
  }

  return containIntrinsicHeight
}
