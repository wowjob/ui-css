import { normalizeDirectional } from '../normalize-directional'
import { convertToRem } from '../convert-to-rem/convert-to-rem'
import type { TBorderWidth } from '../../type'

export const normalizeBorderWidth = (width: TBorderWidth): string | number => {
  return normalizeDirectional(width, convertToRem)
}
