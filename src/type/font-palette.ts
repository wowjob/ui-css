import type { TGlobalKeyword } from './global-keyword'

export type TFontPalette =
  | 'normal' // Using font-defined palette
  | `--${string}` // User-defined palette
  | `palette-mix(${string})` // Creating a new palette
  | TGlobalKeyword
