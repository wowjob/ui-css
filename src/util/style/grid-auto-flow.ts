import type { TGridAutoFlow } from '../../type'

export const normalizeGridAutoFlow = (value: TGridAutoFlow): string => {
  if (!value) {
    return 'row' // Default value
  }
  return value
}
