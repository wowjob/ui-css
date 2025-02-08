import type { TStrokeLinecap } from '../../type'

export const normalizeStrokeLinecap = (
  strokeLinecap: TStrokeLinecap
): string => {
  if (!strokeLinecap) {
    return 'butt' // Default value
  }
  return strokeLinecap
}
