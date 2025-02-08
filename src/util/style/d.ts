import type { TD } from '../../type'

export const normalizeD = (d: TD): string => {
  if (!d) {
    return 'none' // Default value
  }
  return d
}
