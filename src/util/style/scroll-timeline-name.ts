import type { TScrollTimelineName } from '../../type'

export const normalizeScrollTimelineName = (
  scrollTimelineName: TScrollTimelineName
): string => {
  if (!scrollTimelineName) {
    return 'none' // Default value
  }
  return scrollTimelineName
}
