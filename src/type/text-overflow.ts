import type { TGlobalKeyword } from './global-keyword'

export type TTextOverflow =
  | TGlobalKeyword
  | 'clip'
  | 'ellipsis'
  | `${'ellipsis' | string} ${'ellipsis' | string}`
