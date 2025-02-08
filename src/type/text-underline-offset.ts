import type { TGlobalKeyword } from './global-keyword'

export type TTextUnderlineOffset =
  | TGlobalKeyword
  | 'auto'
  | (string & {})
  | number // Covers length and percentage values
