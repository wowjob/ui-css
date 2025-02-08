import type { TGlobalKeyword } from './global-keyword'

export type TQuotes =
  | 'none'
  | 'auto'
  | `${string} ${string}` // Single level of quotation marks
  | `${string} ${string} ${string} ${string}` // Two levels of quotation marks
  | TGlobalKeyword
