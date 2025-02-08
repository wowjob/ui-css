import type { TScrollTimelineAxis } from '../../type'

export const normalizeScrollTimelineAxis = (
  scrollTimelineAxis: TScrollTimelineAxis
): string => {
  if (!scrollTimelineAxis) {
    return 'block' // Default value
  }
  return scrollTimelineAxis
}
