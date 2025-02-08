import type { TClear } from '../../type'

export const normalizeClear = (clear: TClear): string => {
  if (!clear) {
    return 'none' // Default value
  }
  return clear
}
