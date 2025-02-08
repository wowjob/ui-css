import type { TGlobalKeyword } from './global-keyword'

export type TAlignSelf =
  | 'auto'
  | 'normal'
  | 'center'
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
  | `safe ${'center' | 'start' | 'end' | 'flex-start' | 'flex-end'}`
  | `unsafe ${'center' | 'start' | 'end' | 'flex-start' | 'flex-end'}`
  | TGlobalKeyword
