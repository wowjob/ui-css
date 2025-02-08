import type { TGlobalKeyword } from './global-keyword'

export type TInsetInline =
  | number
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | 'auto'
  | `anchor(${string})`
  | `anchor-size(${string}, ${string | number})`
  | [TInsetInline, TInsetInline?] // Supports shorthand formats for start and end
  | { start?: TInsetInline; end?: TInsetInline } // Object with start and end keys
  | TGlobalKeyword
