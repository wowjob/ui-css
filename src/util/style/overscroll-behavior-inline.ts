import type { TOverscrollBehaviorInline } from '../../type'

export const normalizeOverscrollBehaviorInline = (
  value: TOverscrollBehaviorInline
): string => {
  if (!value) {
    return 'auto' // Default value
  }

  return value
}
