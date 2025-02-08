import type { TContentVisibility } from '../../type'

export const normalizeContentVisibility = (
  contentVisibility: TContentVisibility
): string => {
  if (!contentVisibility) {
    return 'visible' // Default value
  }
  return contentVisibility
}
