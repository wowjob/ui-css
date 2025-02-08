import type { TTextOrientation } from '../../type'

export const normalizeTextOrientation = (
  textOrientation: TTextOrientation
): string => {
  if (!textOrientation) {
    return 'mixed' // Default value
  }
  return textOrientation
}
