import type { TGlobalKeyword } from './global-keyword'

export type TPerspectiveOrigin =
  | `${number}%` // Percentages for x or y positions
  | `${number}${'px' | 'em' | 'rem'}` // Length values for x or y positions
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'center'
  | `${'top' | 'bottom' | `${number}%`} ${'left' | 'right' | `${number}%`}`
  | `${'left' | 'right' | `${number}%`} ${'top' | 'bottom' | `${number}%`}`
  | TGlobalKeyword
