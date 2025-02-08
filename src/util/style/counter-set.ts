import type { TCounterSet } from '../../type'

export const normalizeCounterSet = (counterSet: TCounterSet): string => {
  if (!counterSet) {
    return 'none' // Default value
  }
  return counterSet
}
