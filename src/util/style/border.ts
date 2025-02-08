import { convertToRem } from '../convert-to-rem/convert-to-rem' // Import the conversion function
import type { TBorder } from '../../type/border'

export const normalizeBorder = (border: TBorder): string => {
  if (
    border === null ||
    border === undefined ||
    border === '' ||
    border === true ||
    border === false
  ) {
    return 'none'
  }

  if (typeof border === 'object') {
    if (Object.keys(border).length === 0) {
      return 'none'
    }

    const { width, style, color } = border
    return [
      width ? convertToRem(width) : '0', // Default to '0' for width
      style || 'solid',
      color || 'currentColor', // Default to 'currentColor' for color
    ]
      .filter(Boolean)
      .join(' ')
  }

  // If border is already a string or number, return it as-is
  return border?.toString() || 'none'
}
