import type { TTransform } from '../../type'

export const normalizeTransform = (transform: TTransform): string => {
  if (!transform || transform === 'none') {
    return 'none' // Default value
  }
  return transform
}
