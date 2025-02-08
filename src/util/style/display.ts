import type { TDisplay } from '../../type'

export const normalizeDisplay = (display: TDisplay): string => {
  return display || 'block'
}
