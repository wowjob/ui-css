import type { TTouchAction } from '../../type'

export const normalizeTouchAction = (touchAction: TTouchAction): string => {
  if (!touchAction) {
    return 'auto' // Default value
  }
  return touchAction
}
