import { convertToRem } from '../convert-to-rem/convert-to-rem'
import { normalizeDirectional } from '../normalize-directional'
import type { TPadding } from '../../type'

export const normalizePadding = (padding: TPadding): string | number => {
  return normalizeDirectional(padding, convertToRem)
}
