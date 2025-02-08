import type { TAlignItems } from '../../type'

export const normalizeAlignItems = (alignItems: TAlignItems): string => {
  if (alignItems === null || alignItems === undefined) {
    return 'normal'
  }

  // Return valid values as-is
  return alignItems
}
