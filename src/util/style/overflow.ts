import type { TOverflow } from '../../type'

export const normalizeOverflow = (value: TOverflow): string => {
  if (!value) {
    return 'visible' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  if (typeof value === 'object' && !Array.isArray(value)) {
    const { x = 'visible', y = 'visible' } = value
    return x === y ? x : `${x} ${y}`
  }

  return String(value)
}
