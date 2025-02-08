import type { TCounterIncrement } from '../../type'

export const normalizeCounterIncrement = (
  counterIncrement: TCounterIncrement
): string => {
  if (!counterIncrement) {
    return 'none' // Default value
  }
  return counterIncrement
}
