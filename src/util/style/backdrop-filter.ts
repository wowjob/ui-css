import type { TBackdropFilter } from '../../type'

export const normalizeBackdropFilter = (
  backdropFilter: TBackdropFilter
): string => {
  if (backdropFilter === null || backdropFilter === undefined) {
    return 'none'
  }

  // Return valid values as-is
  return backdropFilter
}
