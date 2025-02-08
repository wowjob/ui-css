import type { TAlignContent } from '../../type'

export const normalizeAlignContent = (alignContent: TAlignContent): string => {
  if (alignContent === null || alignContent === undefined) {
    return 'normal'
  }

  // Return valid values as-is
  return alignContent.toString()
}
