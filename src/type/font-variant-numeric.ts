import type { TGlobalKeyword } from './global-keyword'

export type TFontVariantNumeric =
  | 'normal'
  | 'ordinal'
  | 'slashed-zero'
  | 'lining-nums'
  | 'oldstyle-nums'
  | 'proportional-nums'
  | 'tabular-nums'
  | 'diagonal-fractions'
  | 'stacked-fractions'
  | `${string} ${string}` // Combinations like 'oldstyle-nums stacked-fractions'
  | TGlobalKeyword
