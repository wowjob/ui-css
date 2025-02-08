import type { TTextDecoration } from '../../type'
import { convertToRem } from '../convert-to-rem'

export const normalizeTextDecoration = (
  textDecoration: TTextDecoration
): string => {
  if (!textDecoration) {
    return 'none' // Default value
  }

  if (typeof textDecoration === 'string') {
    return textDecoration
  }

  if (Array.isArray(textDecoration)) {
    return textDecoration.join(' ')
  }

  const { line, style, color, thickness } = textDecoration
  const normalizedThickness =
    thickness && (typeof thickness === 'number' || /^[\d.]+px$/.test(thickness))
      ? convertToRem(thickness)
      : thickness

  return [line, style, color, normalizedThickness].filter(Boolean).join(' ')
}
