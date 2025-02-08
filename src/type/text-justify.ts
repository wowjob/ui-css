import type { TGlobalKeyword } from './global-keyword'

export type TTextJustify =
  | TGlobalKeyword
  | 'none'
  | 'auto'
  | 'inter-word'
  | 'inter-character'
  | 'distribute' // Deprecated value
