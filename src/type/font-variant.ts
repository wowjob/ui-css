import type { TGlobalKeyword } from './global-keyword'

type TFontVariantLigatures =
  | 'common-ligatures'
  | 'no-common-ligatures'
  | 'discretionary-ligatures'
  | 'no-discretionary-ligatures'
  | 'historical-ligatures'
  | 'no-historical-ligatures'
  | 'contextual'
  | 'no-contextual'
  | (string & {}) // Covers functional values like stylistic(), historical-forms, etc.

type TFontVariantCaps =
  | 'small-caps'
  | 'all-small-caps'
  | 'petite-caps'
  | 'all-petite-caps'
  | 'unicase'
  | 'titling-caps'

type TFontVariantNumeric =
  | 'lining-nums'
  | 'oldstyle-nums'
  | 'proportional-nums'
  | 'tabular-nums'
  | 'diagonal-fractions'
  | 'stacked-fractions'
  | 'ordinal'
  | 'slashed-zero'

type TFontVariantEastAsian =
  | 'jis78'
  | 'jis83'
  | 'jis90'
  | 'jis04'
  | 'simplified'
  | 'traditional'
  | 'full-width'
  | 'proportional-width'
  | 'ruby'

type TFontVariantPosition = 'sub' | 'super'

type TFontVariantEmoji = 'text' | 'emoji' | 'unicode'

export type TFontVariant =
  | TGlobalKeyword
  | 'normal'
  | 'none'
  | TFontVariantLigatures
  | TFontVariantCaps
  | TFontVariantNumeric
  | TFontVariantEastAsian
  | TFontVariantPosition
  | TFontVariantEmoji
  | (string & {}) // Covers combinations or additional functional values
