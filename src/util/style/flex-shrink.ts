import type { TFlexShrink } from '../../type'

export const normalizeFlexShrink = (shrink: TFlexShrink): string => {
  if (typeof shrink === 'number') {
    return shrink.toString()
  }

  return shrink || '1'
}
