import type { TTransformOrigin } from '../../type'

export const normalizeTransformOrigin = (
  transformOrigin: TTransformOrigin
): string => {
  if (!transformOrigin) {
    return '50% 50% 0' // Default value
  }
  return transformOrigin
}
