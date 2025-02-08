import type { TTextRendering } from '../../type'

export const normalizeTextRendering = (
  textRendering: TTextRendering
): string => {
  if (!textRendering) {
    return 'auto' // Default value
  }
  return textRendering
}
