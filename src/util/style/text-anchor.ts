import type { TTextAnchor } from '../../type'

export const normalizeTextAnchor = (textAnchor: TTextAnchor): string => {
  if (!textAnchor) {
    return 'start' // Default value
  }
  return textAnchor
}
