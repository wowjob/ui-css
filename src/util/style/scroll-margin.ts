import { normalizeDirectional } from '../normalize-directional'
import { convertToRem } from '../convert-to-rem/convert-to-rem'
import type { TScrollMargin } from '../../type'

export const normalizeScrollMargin = (
  scrollMargin: TScrollMargin
): string | number => {
  return normalizeDirectional(scrollMargin, convertToRem)
}
