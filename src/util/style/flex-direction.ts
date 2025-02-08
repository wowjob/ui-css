import type { TFlexDirection } from '../../type'

export const normalizeFlexDirection = (direction: TFlexDirection): string => {
  return direction || 'row'
}
