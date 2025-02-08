import type { TZIndex } from '../../type'

export const normalizeZIndex = (zIndex: TZIndex): string => {
  if ((!zIndex && zIndex !== 0) || zIndex === 'auto') {
    return 'auto' // Default value
  }

  return typeof zIndex === 'number' ? zIndex.toString() : zIndex
}
