import type { TContainer } from '../../type'

export const normalizeContainer = (container: TContainer): string => {
  if (!container) {
    return '' // Default value
  }
  return container
}
