import type { TBreakInside } from '../../type'

export const normalizeBreakInside = (breakInside: TBreakInside): string => {
  if (!breakInside) {
    return 'auto' // Default value
  }
  return breakInside
}
