import type { TGlobalKeyword } from './global-keyword'

export type TObjectPosition =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'center'
  | `${number}% ${number}%`
  | `${number}${'px' | 'em' | 'rem' | 'cm' | 'ch'} ${number}${
      | 'px'
      | 'em'
      | 'rem'
      | 'cm'
      | 'ch'}`
  | `bottom ${number}${'px' | 'em' | 'rem' | 'cm'} right ${number}${
      | 'px'
      | 'em'
      | 'rem'
      | 'cm'}`
  | `right ${number}${'px' | 'em' | 'rem' | 'cm'} bottom ${number}${
      | 'px'
      | 'em'
      | 'rem'
      | 'cm'}`
  | `top ${number}${'px' | 'em' | 'rem' | 'cm'} right ${number}${
      | 'px'
      | 'em'
      | 'rem'
      | 'cm'}`
  | TGlobalKeyword
