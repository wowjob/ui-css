import type { TFillRule } from '../../type'

export const normalizeFillRule = (fillRule: TFillRule): string => {
  if (!fillRule) {
    return 'evenodd' // Default value
  }
  return fillRule
}
