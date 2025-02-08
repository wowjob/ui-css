import type { TGlobalKeyword } from './global-keyword'

export type TContainIntrinsicSize =
  | 'none'
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}vw`
  | `${number}vh`
  | `${number}px ${number}${'px' | 'em' | 'rem' | 'vw' | 'vh'}` // width | height
  | `${'auto'} ${number}px`
  | `${'auto'} ${'none'}`
  | `${'auto'} ${number}${
      | 'px'
      | 'em'
      | 'rem'
      | 'vw'
      | 'vh'} ${'auto'} ${number}${'px' | 'em' | 'rem' | 'vw' | 'vh'}` // auto width | auto height
  | number
  | TGlobalKeyword
