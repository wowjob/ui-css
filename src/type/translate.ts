import type { TGlobalKeyword } from './global-keyword'

export type TTranslate =
  | TGlobalKeyword
  | 'none'
  | string
  | number
  | `${string | number} ${string | number}`
  | `${string | number} ${string | number} ${string | number}`
