import type { TFlexWrap } from '../../type'

export const normalizeFlexWrap = (wrap: TFlexWrap): string => {
  return wrap || 'nowrap'
}
