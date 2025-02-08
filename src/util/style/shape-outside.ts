import type { TShapeOutside } from '../../type'

export const normalizeShapeOutside = (shapeOutside: TShapeOutside): string => {
  if (!shapeOutside) {
    return 'none' // Default value
  }
  return shapeOutside
}
