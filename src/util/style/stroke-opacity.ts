import type { TStrokeOpacity } from '../../type'

export const normalizeStrokeOpacity = (
  strokeOpacity: TStrokeOpacity
): string => {
  if (strokeOpacity === null || strokeOpacity === undefined) {
    return '1' // Default value
  }
  return typeof strokeOpacity === 'number'
    ? strokeOpacity.toString()
    : strokeOpacity
}
