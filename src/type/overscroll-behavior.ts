import type { TGlobalKeyword } from './global-keyword'

export type TOverscrollBehavior =
  | 'auto'
  | 'contain'
  | 'none'
  | `${'auto' | 'contain' | 'none'} ${'auto' | 'contain' | 'none'}`
  | {
      x?: 'auto' | 'contain' | 'none'
      y?: 'auto' | 'contain' | 'none'
    }
  | TGlobalKeyword
