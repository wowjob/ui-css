import type { TGlobalKeyword } from './global-keyword'

export type TBorderKeyword = 'none' | TGlobalKeyword

export type TBorderWidthUnit =
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`

export type TBorderStyle =
  | 'solid'
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'
  | 'hidden'
  | 'none'
  | null
  | undefined

export type TBorder =
  | {
      width?: TBorderWidthUnit | number
      style?: TBorderStyle
      color?: string
    }
  | TBorderKeyword
  | boolean
  | string
