import type { TRubyPosition } from '../../type'

export const normalizeRubyPosition = (value: TRubyPosition): string => {
  if (!value || value === 'over') {
    return 'over' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
