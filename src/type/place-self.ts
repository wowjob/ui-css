import type { TGlobalKeyword } from './global-keyword'

export type TPlaceSelfBase =
  | 'auto'
  | 'center'
  | 'normal'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'anchor-center'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'stretch'

export type TPlaceSelf =
  | TPlaceSelfBase
  | `${TPlaceSelfBase} ${TPlaceSelfBase}` // Two-value syntax
  | TGlobalKeyword
