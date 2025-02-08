import type { TColumnSpan } from '../../type'

export const normalizeColumnSpan = (columnSpan: TColumnSpan): string => {
  if (!columnSpan) {
    return 'none' // Default value
  }
  return columnSpan
}
