import type { TAppearance } from '../../type'

export const normalizeAppearance = (appearance: TAppearance): string => {
  if (appearance === null || appearance === undefined) {
    return 'auto'
  }

  // Return valid values as-is
  return appearance
}
