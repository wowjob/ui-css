import type { TCursor } from '../../type'

export const normalizeCursor = (cursor: TCursor): string => {
  if (!cursor) {
    return 'auto' // Default value
  }
  return cursor
}
