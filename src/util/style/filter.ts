import type { TFilter } from '../../type'

export const normalizeFilter = (filter: TFilter): string => {
  if (!filter) {
    return 'none' // Default value
  }
  return filter
}
