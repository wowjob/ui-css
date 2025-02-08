import type { TForcedColorAdjust } from '../../type'

export const normalizeForcedColorAdjust = (
  forcedColorAdjust: TForcedColorAdjust
): string => {
  if (!forcedColorAdjust) {
    return 'auto' // Default value
  }
  return forcedColorAdjust
}
