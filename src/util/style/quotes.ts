import type { TQuotes } from '../../type'

export const normalizeQuotes = (value: TQuotes): string => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
