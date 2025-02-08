import { normalizeDirectional } from '../normalize-directional'
import { convertToRem } from '../convert-to-rem/convert-to-rem'
import type { TScrollPadding } from '../../type'

export const normalizeScrollPadding = (
  scrollPadding: TScrollPadding
): string | number => {
  return normalizeDirectional(scrollPadding, convertToRem)
}
