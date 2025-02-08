import type { TTextCombineUpright } from '../../type'

export const normalizeTextCombineUpright = (
  textCombineUpright: TTextCombineUpright
): string => {
  if (!textCombineUpright) {
    return 'none' // Default value
  }
  return textCombineUpright
}
