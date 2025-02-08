import type { TGlobalKeyword } from './global-keyword'
import type { TDirectionalUnit } from './directional-unit'

export type TBorderEndEndRadius =
  | number
  | TDirectionalUnit
  | TGlobalKeyword
  | (string & {})
