import type { TBackgroundBlendMode } from '../../type'

export const normalizeBackgroundBlendMode = (
  backgroundBlendMode: TBackgroundBlendMode
): string => {
  if (backgroundBlendMode === null || backgroundBlendMode === undefined) {
    return 'normal'
  }

  // Return valid values as-is
  return backgroundBlendMode.toString()
}
