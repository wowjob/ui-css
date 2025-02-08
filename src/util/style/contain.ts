import type { TContain } from '../../type'

export const normalizeContain = (contain: TContain): string => {
  if (!contain) {
    return 'none' // Default value
  }
  return contain
}
