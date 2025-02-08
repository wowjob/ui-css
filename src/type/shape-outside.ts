import type { TGlobalKeyword } from './global-keyword'

export type TShapeOutside =
  | 'none'
  | 'margin-box'
  | 'content-box'
  | 'border-box'
  | 'padding-box'
  | TGlobalKeyword
  | (string & {})
