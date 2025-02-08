import type { TGlobalKeyword } from './global-keyword'

export type TFillOpacity =
  | number // Numeric value
  | `${number}%` // Percentage value
  | TGlobalKeyword
