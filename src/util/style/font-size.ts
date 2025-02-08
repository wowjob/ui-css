import type { TFontSize } from '../../type'
import { convertToRem } from '../convert-to-rem'

export const normalizeFontSize = (fontSize: TFontSize): string => {
  if (!fontSize) {
    return 'medium' // Default value
  }

  if (typeof fontSize === 'number' || /^[\d.]+px$/.test(fontSize)) {
    return convertToRem(fontSize)
  }

  return fontSize.toString()
}
