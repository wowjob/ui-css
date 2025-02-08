import type { TGlobalKeyword } from './global-keyword'

export type TFontVariantLigatures =
  | 'normal'
  | 'none'
  | 'common-ligatures'
  | 'no-common-ligatures'
  | 'discretionary-ligatures'
  | 'no-discretionary-ligatures'
  | 'historical-ligatures'
  | 'no-historical-ligatures'
  | 'contextual'
  | 'no-contextual'
  | `${string} ${string}` // Combinations like 'no-contextual common-ligatures'
  | `${string} ${string} ${string} ${string}` // Four values like 'common-ligatures no-discretionary-ligatures historical-ligatures contextual'
  | TGlobalKeyword
