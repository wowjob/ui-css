import type { TGlobalKeyword } from './global-keyword'

export type TBorderImage =
  | {
      source?: string
      slice?: string | number
      width?: string | number
      outset?: string | number
      repeat?: 'stretch' | 'repeat' | 'round' | 'space'
    }
  | TGlobalKeyword
  | (string & {})
