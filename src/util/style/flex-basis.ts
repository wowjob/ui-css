import type { TFlexBasis } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeFlexBasis = (basis: TFlexBasis): string => {
  if (isPx(basis as string)) {
    return convertToRem(basis as string)
  }

  return basis || 'auto'
}
