import type { TBreakAfter } from '../../type'

export const normalizeBreakAfter = (breakAfter: TBreakAfter): string => {
  if (!breakAfter) {
    return 'auto' // Default value
  }
  return breakAfter
}
