import type { TBorderStyle } from './border'
import type { TGlobalKeyword } from './global-keyword'

export type TColumnRule =
  | string // Represents shorthand values like 'solid blue' or 'thick inset blue'
  | {
      color?: string // Color value (e.g., 'blue', '#000')
      style?: TBorderStyle
      width?: string | number // Width in px, em, rem, or as a number
    }
  | TGlobalKeyword
