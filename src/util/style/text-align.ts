import type { TTextAlign } from '../../type'

export const normalizeTextAlign = (textAlign: TTextAlign): string => {
  if (!textAlign) {
    return 'start' // Default value
  }
  return textAlign
}
