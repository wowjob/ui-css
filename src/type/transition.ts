import type { TGlobalKeyword } from './global-keyword'

export type TTransitionProperty = TGlobalKeyword | 'none' | 'all' | string // Covers custom-ident and multiple values

export type TTransitionDuration = TGlobalKeyword | string | number // Covers time values

export type TTransitionTimingFunction =
  | TGlobalKeyword
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | 'linear'
  | 'step-start'
  | 'step-end'
  | string // Covers function values and multiple easing functions

export type TTransitionDelay = TGlobalKeyword | string | number // Covers time values

export type TTransition =
  | string
  | Array<string | number>
  | {
      property?: TTransitionProperty
      duration?: TTransitionDuration
      timingFunction?: TTransitionTimingFunction
      delay?: TTransitionDelay
    }
