import type { TGlobalKeyword } from './global-keyword'

export type TFlexDirection =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | TGlobalKeyword
  | (string & {})
