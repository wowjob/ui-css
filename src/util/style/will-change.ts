import type { TWillChange } from '../../type'

export const normalizeWillChange = (willChange: TWillChange): string => {
  if (!willChange) {
    return 'auto' // Default value
  }
  return willChange
}
