import type { TBorderStyle } from './border'
import type { TGlobalKeyword } from './global-keyword'
import type { TDirectionalUnit } from './directional-unit'

export type TBorderRight =
  | {
      color?: string
      style?: TBorderStyle
      width?: number | TDirectionalUnit | (string & {})
    }
  | TGlobalKeyword
  | (string & {})
