import type { TBackgroundClip } from '../../type'

export const normalizeBackgroundClip = (
  backgroundClip: TBackgroundClip
): string => {
  if (backgroundClip === null || backgroundClip === undefined) {
    return 'border-box'
  }

  // Return valid values as-is
  return backgroundClip.toString()
}
