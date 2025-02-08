import type { TGlobalKeyword } from './global-keyword'

export type TD =
  | 'none'
  | `path(${string})` // Represents a path string for basic usage
  | TGlobalKeyword
