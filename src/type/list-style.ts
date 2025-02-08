import type { TGlobalKeyword } from './global-keyword'

export type TListStyle =
  | 'none'
  | 'square'
  | 'circle'
  | 'disc'
  | 'decimal'
  | 'lower-roman'
  | 'upper-roman'
  | 'georgian'
  | `url(${string})`
  | 'inside'
  | 'outside'
  | `${string} ${string}` // Two values (e.g., `type position` or `image position`)
  | `${string} ${string} ${string}` // Three values (e.g., `type image position`)
  | {
      type?:
        | 'disc'
        | 'circle'
        | 'square'
        | 'decimal'
        | 'georgian'
        | 'trad-chinese-informal'
        | 'kannada'
        | '"-"'
        | 'custom-counter-style'
        | 'none'
      image?: 'none' | `url(${string})`
      position?: 'inside' | 'outside' | TGlobalKeyword
    } // Object format
  | TGlobalKeyword
