import type { TBackfaceVisibility } from '../../type'

export const normalizeBackfaceVisibility = (
  backfaceVisibility: TBackfaceVisibility
): string => {
  if (backfaceVisibility === null || backfaceVisibility === undefined) {
    return 'visible'
  }

  // Return valid values as-is
  return backfaceVisibility.toString()
}
