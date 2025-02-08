import type { TGlobalKeyword } from './global-keyword'

export type TCaretColor =
  | 'auto'
  | 'transparent'
  | 'currentcolor'
  | TGlobalKeyword
  | (string & {})
