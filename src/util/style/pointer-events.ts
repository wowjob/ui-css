import type { TPointerEvents } from '../../type'

export const normalizePointerEvents = (value: TPointerEvents): string => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
