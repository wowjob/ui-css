import type { TRubyAlign } from '../../type'

export const normalizeRubyAlign = (value: string): TRubyAlign => {
  const validValues: TRubyAlign[] = [
    'start',
    'center',
    'space-between',
    'space-around',
    'inherit',
    'initial',
    'revert',
    'revert-layer',
    'unset',
  ]

  return validValues.includes(value as TRubyAlign)
    ? (value as TRubyAlign)
    : 'initial' // Default to 'initial' for invalid values
}
