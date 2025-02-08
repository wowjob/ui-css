import type { TGlobalKeyword } from './global-keyword'

export type TCounterSet =
  | 'none'
  | string // Represents a list of counters and their values
  | TGlobalKeyword
