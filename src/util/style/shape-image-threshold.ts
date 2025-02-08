import type { TShapeImageThreshold } from '../../type'

export const normalizeShapeImageThreshold = (
  shapeImageThreshold: TShapeImageThreshold
): string => {
  if (shapeImageThreshold === null || shapeImageThreshold === undefined) {
    return '0' // Default value
  }
  return typeof shapeImageThreshold === 'number'
    ? shapeImageThreshold.toString()
    : shapeImageThreshold
}
