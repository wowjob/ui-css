import type { TGlobalKeyword } from './global-keyword'

export type TTouchAction =
  | TGlobalKeyword
  | 'auto'
  | 'none'
  | 'pan-x'
  | 'pan-left'
  | 'pan-right'
  | 'pan-y'
  | 'pan-up'
  | 'pan-down'
  | 'pinch-zoom'
  | 'manipulation'
