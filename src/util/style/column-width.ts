import type { TColumnWidth } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeColumnWidth = (columnWidth: TColumnWidth): string => {
  if (!columnWidth) {
    return 'auto' // Default value
  }

  if (
    (typeof columnWidth === 'string' && isPx(columnWidth)) ||
    typeof columnWidth === 'number'
  ) {
    return convertToRem(columnWidth)
  }

  return columnWidth
}
