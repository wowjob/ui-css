import type { TGlobalKeyword } from './global-keyword'

export type TFontLanguageOverride =
  | 'normal'
  | `"${string}"` // Represents language tag strings like "ENG" or "TRK"
  | TGlobalKeyword
