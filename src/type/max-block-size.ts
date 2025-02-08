import type { TGlobalKeyword } from './global-keyword'

export type TMaxBlockSize =
  | 'none'
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | `fit-content(${string | number})`
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | `calc(${string})`
  | `anchor-size(${string})`
  | number
  | (string & {})
  | TGlobalKeyword
