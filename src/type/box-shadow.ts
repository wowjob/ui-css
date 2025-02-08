import type { TGlobalKeyword } from './global-keyword'

export type TBoxShadow =
  | 'none'
  | string // Represents a single or multiple box-shadow values as a string
  | string[] // Represents an array of box-shadow values
  | TGlobalKeyword
