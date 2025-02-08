import type { TStroke } from '../../type'

export const normalizeStroke = (stroke: TStroke): string => {
  if (!stroke) {
    return 'none' // Default value
  }
  return stroke
}
