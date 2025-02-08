import type { TStopOpacity } from '../../type'

export const normalizeStopOpacity = (stopOpacity: TStopOpacity): string => {
  if (stopOpacity === null || stopOpacity === undefined) {
    return '1' // Default value
  }
  return typeof stopOpacity === 'number' ? stopOpacity.toString() : stopOpacity
}
