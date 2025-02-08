import type { TGlobalKeyword } from './global-keyword'

export type TFontStyle =
  | TGlobalKeyword
  | 'normal'
  | 'italic'
  | 'oblique'
  | `oblique ${string | number}` // Covers angle values for oblique
