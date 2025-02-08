import type { TGlobalKeyword } from './global-keyword'

export type TFontVariationSettings =
  | 'normal'
  | `"${string}" ${number}` // Represents variable font axis settings like "xhgt" 0.7
  | TGlobalKeyword
