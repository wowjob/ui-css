import type { TGlobalKeyword } from './global-keyword'

export type TTextWrap =
  | TGlobalKeyword
  | 'wrap'
  | 'nowrap'
  | 'balance'
  | 'pretty'
  | 'stable'
