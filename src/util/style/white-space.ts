import type { TWhiteSpace } from '../../type'

export const normalizeWhiteSpace = (whiteSpace: TWhiteSpace): string => {
  if (!whiteSpace) {
    return 'normal' // Default value
  }
  return whiteSpace
}
