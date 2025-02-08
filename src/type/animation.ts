import type { TGlobalKeyword } from './global-keyword'

export type TAnimation =
  | {
      name?: string
      duration?: string | number
      timingFunction?: string
      delay?: string | number
      iterationCount?: number | 'infinite'
      direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'
      fillMode?: 'none' | 'forwards' | 'backwards' | 'both'
      playState?: 'running' | 'paused'
      composition?: 'replace' | 'add' | 'accumulate'
    }
  | TGlobalKeyword
  | (string & {})
