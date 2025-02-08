import type { TBackgroundOrigin } from '../../type'

export const normalizeBackgroundOrigin = (
  backgroundOrigin: TBackgroundOrigin
): string => {
  if (backgroundOrigin === null || backgroundOrigin === undefined) {
    return 'border-box'
  }

  // Return valid values as-is
  return backgroundOrigin
}
