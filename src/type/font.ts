import type { TGlobalKeyword } from './global-keyword'

export type TFontSize =
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | number // Numeric values for conversion to rem
  | TGlobalKeyword

export type TFontStretch =
  | 'normal'
  | 'ultra-condensed'
  | 'extra-condensed'
  | 'condensed'
  | 'semi-condensed'
  | 'semi-expanded'
  | 'expanded'
  | 'extra-expanded'
  | 'ultra-expanded'
  | `${number}%`
  | TGlobalKeyword

export type TFontStyle =
  | 'normal'
  | 'italic'
  | 'oblique'
  | `oblique ${number}deg`
  | TGlobalKeyword

export type TFontVariant =
  | 'small-caps'
  | `${string}` // Combinations like "common-ligatures small-caps"
  | TGlobalKeyword

export type TFontWeight =
  | 'normal'
  | 'bold'
  | 'lighter'
  | 'bolder'
  | `${number}` // Numeric values [1, 1000]
  | TGlobalKeyword

export type TLineHeight =
  | 'normal'
  | number
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | TGlobalKeyword
  | (string & {})

export type TFont =
  | {
      family?: string
      size?: TFontSize
      stretch?: TFontStretch
      style?: TFontStyle
      variant?: TFontVariant
      weight?: TFontWeight
      lineHeight?: TLineHeight
    }
  | TGlobalKeyword
  | string // Shorthand string representation
