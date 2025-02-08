import type { TGlobalKeyword } from './global-keyword'

export type TContain =
  | 'none'
  | 'strict'
  | 'content'
  | 'size'
  | 'inline-size'
  | 'layout'
  | 'style'
  | 'paint'
  | `${'size' | 'inline-size'} ${'layout' | 'paint' | 'style' | ''}`
  | `${'size'} ${'layout'} ${'paint'}`
  | TGlobalKeyword
