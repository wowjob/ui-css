import type { TGlobalKeyword } from './global-keyword'

export type TColumnCount =
  | 'auto'
  | number // Represents <integer> value
  | TGlobalKeyword
