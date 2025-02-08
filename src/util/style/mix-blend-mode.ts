import type { TMixBlendMode } from '../../type'

export const normalizeMixBlendMode = (value: TMixBlendMode): string => {
  if (!value || value === 'normal') {
    return 'normal' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
