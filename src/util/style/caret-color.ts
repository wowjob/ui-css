import type { TCaretColor } from '../../type'

export const normalizeCaretColor = (caretColor: TCaretColor): string => {
  if (!caretColor) {
    return 'auto' // Default value
  }
  return caretColor.toString()
}
