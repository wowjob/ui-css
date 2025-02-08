import type { TTableLayout } from '../../type'

export const normalizeTableLayout = (tableLayout: TTableLayout): string => {
  if (!tableLayout) {
    return 'auto' // Default value
  }
  return tableLayout
}
