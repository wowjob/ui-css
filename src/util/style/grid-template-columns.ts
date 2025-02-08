import type { TGridTemplateColumns } from '../../type'

export const normalizeGridTemplateColumns = (
  gridTemplateColumns: TGridTemplateColumns
): string => {
  if (!gridTemplateColumns || gridTemplateColumns === 'none') {
    return 'none' // Default value
  }

  return gridTemplateColumns
}
