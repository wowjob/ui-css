import type { TGlobalKeyword } from './global-keyword'

export type TStrokeDasharray =
  | TGlobalKeyword
  | 'none'
  | (string | number)[]
  | string
  | number
