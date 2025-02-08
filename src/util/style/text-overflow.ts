import type { TTextOverflow } from '../../type'

export const normalizeTextOverflow = (textOverflow: TTextOverflow): string => {
  if (!textOverflow) {
    return 'clip' // Default value
  }
  return textOverflow
}
