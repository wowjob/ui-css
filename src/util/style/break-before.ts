import type { TBreakBefore } from '../../type'

export const normalizeBreakBefore = (breakBefore: TBreakBefore): string => {
  if (!breakBefore) {
    return 'auto' // Default value
  }
  return breakBefore.toString()
}
