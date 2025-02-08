import type { TGlobalKeyword } from './global-keyword'

export type TTextRendering =
  | TGlobalKeyword
  | 'auto'
  | 'optimizeSpeed'
  | 'optimizeLegibility'
  | 'geometricPrecision'
