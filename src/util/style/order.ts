import type { TOrder } from '../../type'

export const normalizeOrder = (value: TOrder): string | number => {
  if (value === undefined || value === null) {
    return '0' // Default value
  }

  if (typeof value === 'number') {
    return value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
