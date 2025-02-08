import type { TAlignSelf } from '../../type'

export const normalizeAlignSelf = (alignSelf: TAlignSelf): string => {
  if (alignSelf === null || alignSelf === undefined) {
    return 'auto'
  }

  // Return valid values as-is
  return alignSelf
}
