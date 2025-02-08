import type { TTransformStyle } from '../../type'

export const normalizeTransformStyle = (
  transformStyle: TTransformStyle
): string => {
  if (!transformStyle) {
    return 'flat' // Default value
  }
  return transformStyle
}
