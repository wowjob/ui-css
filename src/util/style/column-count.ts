import type { TColumnCount } from '../../type'

export const normalizeColumnCount = (
  columnCount: TColumnCount
): string | number => {
  if (columnCount === undefined || columnCount === null) {
    return 'auto' // Default value
  }
  return columnCount
}
