import type { TGlobalKeyword } from './global-keyword'

export type TTransformBox =
  | TGlobalKeyword
  | 'content-box'
  | 'border-box'
  | 'fill-box'
  | 'stroke-box'
  | 'view-box'
