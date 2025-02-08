import type { TGlobalKeyword } from './global-keyword'

export type TMinInlineSize =
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | `fit-content(${string | number})`
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | `anchor-size(${string})`
  | number
  | (string & {})
  | TGlobalKeyword
