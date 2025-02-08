import type { TGlobalKeyword } from './global-keyword'

export type TMaskClip =
  | 'content-box'
  | 'padding-box'
  | 'border-box'
  | 'fill-box'
  | 'stroke-box'
  | 'view-box'
  | 'no-clip'
  | '-webkit-mask-clip'
  | 'border'
  | 'padding'
  | 'content'
  | 'text'
  | TMaskClip[] // Multiple values
  | TGlobalKeyword
