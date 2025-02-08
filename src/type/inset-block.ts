import type { TGlobalKeyword } from './global-keyword'

export type TInsetBlock =
  | number
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | 'auto'
  | `anchor(${string})`
  | `anchor-size(${string}, ${string | number})`
  | [TInsetBlock, TInsetBlock?] // Supports shorthand formats for start and end
  | { start?: TInsetBlock; end?: TInsetBlock } // Object with start and end keys
  | TGlobalKeyword
