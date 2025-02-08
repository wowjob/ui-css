import type { TContent } from '../../type'

export const normalizeContent = (content: TContent): string => {
  if (!content) {
    return 'normal' // Default value
  }
  return content
}
