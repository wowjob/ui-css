import type { TGlobalKeyword } from './global-keyword'

export type TTextIndent =
  | TGlobalKeyword
  | string
  | number
  | `${number | string} ${'hanging' | 'each-line' | 'hanging each-line'}`
