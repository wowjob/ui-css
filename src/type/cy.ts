import type { TGlobalKeyword } from './global-keyword'

export type TCy =
  | `${number}px`
  | `${number}%`
  | number // Allows raw numbers for conversion to rem
  | TGlobalKeyword
