import type { TFillOpacity } from '../../type'

export const normalizeFillOpacity = (fillOpacity: TFillOpacity): string => {
  if (!fillOpacity) {
    return '1' // Default value (100% opacity)
  }
  return fillOpacity.toString()
}
