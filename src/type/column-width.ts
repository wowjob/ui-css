import type { TGlobalKeyword } from './global-keyword'

export type TColumnWidth =
  | 'auto'
  | `${number}px`
  | `${number}em`
  | `${number}vw`
  | number // Represents a numeric value to be converted to rem
  | TGlobalKeyword
