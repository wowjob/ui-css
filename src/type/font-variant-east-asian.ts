import type { TGlobalKeyword } from './global-keyword'

export type TFontVariantEastAsian =
  | 'normal'
  | 'ruby'
  | 'jis78'
  | 'jis83'
  | 'jis90'
  | 'jis04'
  | 'simplified'
  | 'traditional'
  | 'full-width'
  | 'proportional-width'
  | `${string} ${string}` // Combinations like 'ruby full-width jis83'
  | TGlobalKeyword
