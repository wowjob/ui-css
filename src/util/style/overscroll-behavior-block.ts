import type { TOverscrollBehaviorBlock } from '../../type'

export const normalizeOverscrollBehaviorBlock = (
  value: TOverscrollBehaviorBlock
): string => {
  if (!value) {
    return 'auto' // Default value
  }

  return value
}
