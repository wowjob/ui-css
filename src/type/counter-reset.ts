import type { TGlobalKeyword } from './global-keyword'

export type TCounterReset =
  | 'none'
  | string // Represents a list of counters and their initial values, including reversed
  | TGlobalKeyword
