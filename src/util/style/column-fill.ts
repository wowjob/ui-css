import type { TColumnFill } from '../../type'

export const normalizeColumnFill = (columnFill: TColumnFill): string => {
  if (!columnFill) {
    return 'auto' // Default value
  }
  return columnFill
}
