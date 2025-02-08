import type { TGridTemplateRows } from '../../type'

export const normalizeGridTemplateRows = (
  gridTemplateRows: TGridTemplateRows
): string => {
  if (!gridTemplateRows || gridTemplateRows === 'none') {
    return 'none' // Default value
  }
  return gridTemplateRows
}
