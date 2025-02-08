import type { TAccentColor } from '../../type'

export const normalizeAccentColor = (accentColor: TAccentColor): string => {
  if (accentColor === null || accentColor === undefined) {
    return 'auto'
  }

  // Return valid values as-is
  return accentColor
}
