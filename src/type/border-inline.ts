import type { TBorderStyle } from './border'
import type { TGlobalKeyword } from './global-keyword'

export type TBorderInline =
  | {
      width?: string | number
      style?: TBorderStyle
      color?: string
    }
  | TGlobalKeyword
  | (string & {})
