import type { TGlobalKeyword } from './global-keyword'

export type TContainer =
  | string // Represents <container-name>
  | `${string} / size` // Represents <container-name> / <container-type>
  | `${string} / inline-size` // Optional <container-type>
  | TGlobalKeyword
