import type { TWritingMode } from '../../type'

export const normalizeWritingMode = (writingMode: TWritingMode): string => {
  if (!writingMode) {
    return 'horizontal-tb' // Default value
  }
  return writingMode
}
