import type { TClip } from '../../type'

export const normalizeClip = (clip: TClip): string => {
  if (!clip) {
    return 'auto' // Default value
  }

  return clip
}
