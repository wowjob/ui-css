import type { TBorderCollapse } from '../../type'

export const normalizeBorderCollapse = (
  borderCollapse: TBorderCollapse
): string => {
  if (borderCollapse === null || borderCollapse === undefined) {
    return 'separate'
  }

  return borderCollapse
}
