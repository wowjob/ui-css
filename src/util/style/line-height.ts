import type { TLineHeight } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeLineHeight = (value: TLineHeight): string | number => {
  if (!value || value === 'normal') {
    return 'normal' // Default value
  }

  if (typeof value === 'string') {
    if (isPx(value)) {
      return convertToRem(value)
    }
    return value
  }

  if (typeof value === 'number') {
    return value // Unitless value
  }

  return value
}
