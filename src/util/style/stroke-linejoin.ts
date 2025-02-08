import type { TStrokeLinejoin } from '../../type'

export const normalizeStrokeLinejoin = (
  strokeLinejoin: TStrokeLinejoin
): string => {
  if (!strokeLinejoin) {
    return 'miter' // Default value
  }
  return strokeLinejoin
}
