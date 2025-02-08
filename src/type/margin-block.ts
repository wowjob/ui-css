import type { TGlobalKeyword } from './global-keyword'

export type TMarginBlock =
  | number
  | `${number}px`
  | `${number}em`
  | `${number}%`
  | `calc(${string})`
  | `anchor-size(${string})`
  | 'auto'
  | [TMarginBlock, TMarginBlock?] // Supports shorthand formats for start and end
  | { start?: TMarginBlock; end?: TMarginBlock } // Object with start and end keys
  | TGlobalKeyword
