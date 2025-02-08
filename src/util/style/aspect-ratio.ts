import type { TAspectRatio } from '../../type'

export const normalizeAspectRatio = (aspectRatio: TAspectRatio): string => {
  if (aspectRatio === null || aspectRatio === undefined) {
    return 'auto'
  }

  // Return valid values as-is
  return aspectRatio.toString()
}
