import type { TGlobalKeyword } from './global-keyword'

export type TZoom =
  | TGlobalKeyword
  | (string & {})
  | number // Covers numeric zoom values
  | 'normal'
  | 'reset' // Non-standard keyword values
