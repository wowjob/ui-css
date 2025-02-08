import type { TGlobalKeyword } from './global-keyword'

export type TCounterIncrement =
  | 'none'
  | string // Represents a list of counters and their increments/decrements
  | TGlobalKeyword
