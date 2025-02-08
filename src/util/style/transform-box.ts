import type { TTransformBox } from '../../type'

export const normalizeTransformBox = (transformBox: TTransformBox): string => {
  if (!transformBox) {
    return 'content-box' // Default value
  }
  return transformBox
}
