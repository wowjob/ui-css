import type { TFlexGrow } from '../../type'

export const normalizeFlexGrow = (grow: TFlexGrow): string => {
  if (typeof grow === 'number') {
    return grow.toString()
  }

  return grow || '0'
}
