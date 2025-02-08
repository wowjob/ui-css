import type { TVerticalAlign } from '../../type'
import { convertToRem } from '../convert-to-rem'

export const normalizeVerticalAlign = (
  verticalAlign: TVerticalAlign
): string => {
  if (!verticalAlign) {
    return 'baseline' // Default value
  }

  if (typeof verticalAlign === 'number' || /^[\d.]+px$/.test(verticalAlign)) {
    return convertToRem(verticalAlign)
  }

  return verticalAlign.toString()
}
