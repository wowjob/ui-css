import type { TCounterReset } from '../../type'

export const normalizeCounterReset = (counterReset: TCounterReset): string => {
  if (!counterReset) {
    return 'none' // Default value
  }
  return counterReset
}
