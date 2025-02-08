import type { TClipPath } from '../../type'

export const normalizeClipPath = (clipPath: TClipPath): string => {
  if (!clipPath) {
    return 'none' // Default value
  }
  return clipPath
}
