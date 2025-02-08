import type { TEmptyCells } from '../../type'

export const normalizeEmptyCells = (emptyCells: TEmptyCells): string => {
  if (!emptyCells) {
    return 'show' // Default value
  }
  return emptyCells
}
