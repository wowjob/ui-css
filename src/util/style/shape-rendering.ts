import type { TShapeRendering } from '../../type'

export const normalizeShapeRendering = (
  shapeRendering: TShapeRendering
): string => {
  if (!shapeRendering) {
    return 'auto' // Default value
  }
  return shapeRendering
}
