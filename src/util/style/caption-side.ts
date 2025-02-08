import type { TCaptionSide } from '../../type'

export const normalizeCaptionSide = (captionSide: TCaptionSide): string => {
  if (!captionSide) {
    return 'top' // Default value
  }
  return captionSide.toString()
}
