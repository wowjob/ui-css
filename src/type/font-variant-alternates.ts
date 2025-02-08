import type { TGlobalKeyword } from './global-keyword'

export type TFontVariantAlternates =
  | 'normal'
  | 'historical-forms'
  | `stylistic(${string})`
  | `styleset(${string})`
  | `character-variant(${string})`
  | `swash(${string})`
  | `ornaments(${string})`
  | `annotation(${string})`
  | `${string} ${string}` // Combination of multiple functional notations
  | TGlobalKeyword
