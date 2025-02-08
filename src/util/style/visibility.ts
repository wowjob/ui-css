import type { TVisibility } from '../../type'

export const normalizeVisibility = (visibility: TVisibility): string => {
  if (!visibility) {
    return 'visible' // Default value
  }
  return visibility
}
