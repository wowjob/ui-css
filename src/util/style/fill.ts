import type { TFill } from '../../type'

export const normalizeFill = (fill: TFill): string => {
  if (!fill) {
    return 'none' // Default value
  }
  return fill
}
