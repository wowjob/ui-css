import type { TGlobalKeyword } from './global-keyword'

export type TFontSize =
  | 'xx-small'
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | 'xx-large'
  | 'xxx-large'
  | 'smaller'
  | 'larger'
  | 'math'
  | TGlobalKeyword
  | number // Covers length and percentage values
  | (string & {})
