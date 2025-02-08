import type { TGlobalKeyword } from './global-keyword'
import type { TDirectionalUnit } from './directional-unit'

export type TBorderBottomLeftRadius =
  | number
  | TDirectionalUnit
  | TGlobalKeyword
  | (string & {})
