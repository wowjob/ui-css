import type { TGlobalKeyword } from './global-keyword'

export type TFloodOpacity =
  | number // Numeric value
  | `${number}%` // Percentage value
  | TGlobalKeyword
