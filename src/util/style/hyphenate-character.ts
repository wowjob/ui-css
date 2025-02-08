import type { THyphenateCharacter } from '../../type'

export const normalizeHyphenateCharacter = (
  value: THyphenateCharacter
): string => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (value === undefined || value === null) {
    return 'auto'
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
