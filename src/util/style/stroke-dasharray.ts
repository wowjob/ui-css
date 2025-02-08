import type { TStrokeDasharray } from '../../type'

export const normalizeStrokeDasharray = (
  strokeDasharray: TStrokeDasharray
): string => {
  if (!strokeDasharray || strokeDasharray === 'none') {
    return 'none' // Default value
  }

  if (Array.isArray(strokeDasharray)) {
    return strokeDasharray.join(', ')
  }

  return strokeDasharray.toString()
}
