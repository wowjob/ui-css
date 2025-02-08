import type { TGlobalKeyword } from './global-keyword'

export type TTextShadow =
  | TGlobalKeyword
  | string
  | `${string | number} ${string | number} ${string | number | ''} ${
      | string
      | ''}`
