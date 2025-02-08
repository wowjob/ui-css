import type { TShapeMargin } from '../../type'
import { convertToRem } from '../convert-to-rem'

export const normalizeShapeMargin = (shapeMargin: TShapeMargin): string => {
  if (shapeMargin === null || shapeMargin === undefined) {
    return '0' // Default value
  }

  if (typeof shapeMargin === 'number' || /^[\d.]+px$/.test(shapeMargin)) {
    return convertToRem(shapeMargin)
  }

  return shapeMargin.toString()
}
