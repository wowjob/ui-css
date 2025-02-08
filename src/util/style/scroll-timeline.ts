import type { TScrollTimeline } from '../../type'

export const normalizeScrollTimeline = (
  scrollTimeline: TScrollTimeline
): string => {
  if (!scrollTimeline) {
    return 'none' // Default value
  }
  return scrollTimeline
}
