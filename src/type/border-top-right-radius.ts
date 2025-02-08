import type { TGlobalKeyword } from './global-keyword'
import type { TDirectionalUnit } from './directional-unit'

export type TBorderTopRightRadius =
  | number
  | TDirectionalUnit
  | TGlobalKeyword
  | (string & {})
