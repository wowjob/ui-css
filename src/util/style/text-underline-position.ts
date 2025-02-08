import type { TTextUnderlinePosition } from '../../type'

export const normalizeTextUnderlinePosition = (
  textUnderlinePosition: TTextUnderlinePosition
): string => {
  if (!textUnderlinePosition) {
    return 'auto' // Default value
  }
  return textUnderlinePosition
}
