import type { TWidth } from '../../type'
import { convertToRem } from '../convert-to-rem'

export const normalizeWidth = (width: TWidth): string => {
  if (!width) {
    return 'auto' // Default value
  }

  if (typeof width === 'number' || /^[\d.]+px$/.test(width)) {
    return convertToRem(width)
  }

  return width.toString()
}
