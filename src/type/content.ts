import type { TGlobalKeyword } from './global-keyword'

export type TContent =
  | 'normal'
  | 'none'
  | `url(${string})`
  | `linear-gradient(${string})`
  | `image-set(${string})`
  | `${'url'}(${string}) / ${string}` // Speech output alternative text
  | `"${string}"` // String value
  | `counter(${string})`
  | `counter(${string}, ${string})` // With list-style-type
  | `counters(${string}, ${string})`
  | `counters(${string}, ${string}, ${string})`
  | `attr(${string})` // HTML attribute value
  | 'open-quote'
  | 'close-quote'
  | 'no-open-quote'
  | 'no-close-quote'
  | `${string} ${string}` // Content list values
  | TGlobalKeyword
