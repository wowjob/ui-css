import type { TStopColor } from '../../type'

export const normalizeStopColor = (stopColor: TStopColor): string => {
  if (!stopColor) {
    return 'currentcolor' // Default value
  }
  return stopColor
}
