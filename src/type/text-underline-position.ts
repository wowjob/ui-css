import type { TGlobalKeyword } from './global-keyword'

export type TTextUnderlinePosition =
  | TGlobalKeyword
  | 'auto'
  | 'under'
  | 'left'
  | 'right'
  | `${'under' | 'right'} ${'left' | 'under'}`
