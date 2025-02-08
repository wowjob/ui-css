import { convertToRem } from '../convert-to-rem/convert-to-rem'
import { normalizeDirectional } from '../normalize-directional'
import type { TMargin } from '../../type'

export const normalizeMargin = (margin: TMargin): string | number =>
  normalizeDirectional(margin, convertToRem)
