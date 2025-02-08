import type { TGlobalKeyword } from './global-keyword'

export type TFontWeight =
  | TGlobalKeyword
  | 'normal'
  | 'bold'
  | 'lighter'
  | 'bolder'
  | number // Numeric values from 1 to 1000
