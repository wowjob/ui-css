import type { TGlobalKeyword } from './global-keyword'

export type TRubyPosition =
  | 'over'
  | 'under'
  | 'alternate'
  | 'alternate over'
  | 'alternate under'
  | 'inter-character'
  | TGlobalKeyword
