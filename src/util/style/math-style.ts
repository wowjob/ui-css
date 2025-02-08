import type { TMathStyle } from '../../type'

export const normalizeMathStyle = (value: TMathStyle): string => {
  if (!value || value === 'normal') {
    return 'normal' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
