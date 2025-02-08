import type { TWordBreak } from '../../type'

export const normalizeWordBreak = (wordBreak: TWordBreak): string => {
  if (!wordBreak) {
    return 'normal' // Default value
  }
  return wordBreak
}
