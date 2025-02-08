import type { TGlobalKeyword } from './global-keyword'

export type TInlineSize =
  | number
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | `${number}vh`
  | `${number}vw`
  | `${number}vmin`
  | `${number}vmax`
  | 'auto'
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | `fit-content(${string | number})`
  | `anchor-size(${string})`
  | TGlobalKeyword
  | (string & {})
