import type { TGlobalKeyword } from './global-keyword'

export type TFontStretch =
  | TGlobalKeyword
  | 'normal'
  | 'ultra-condensed'
  | 'extra-condensed'
  | 'condensed'
  | 'semi-condensed'
  | 'semi-expanded'
  | 'expanded'
  | 'extra-expanded'
  | 'ultra-expanded'
  | (string & {}) // Covers percentage values
