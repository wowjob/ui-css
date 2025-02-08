import type { TGlobalKeyword } from './global-keyword'
import type { TDirectionalUnit } from './directional-unit'

export type TBorderBottomRightRadius =
  | number
  | TDirectionalUnit
  | TGlobalKeyword
  | (string & {})
