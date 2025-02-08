import type { TLineBreak } from '../../type'

export const normalizeLineBreak = (value: TLineBreak): string => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
