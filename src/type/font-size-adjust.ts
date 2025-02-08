import type { TGlobalKeyword } from './global-keyword'

export type TFontSizeAdjust =
  | 'none'
  | 'from-font'
  | number // Single numeric value
  | `${'ex-height' | 'ch-width'} ${number | 'from-font'}` // Two values
  | TGlobalKeyword
