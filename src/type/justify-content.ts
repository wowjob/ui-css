import type { TGlobalKeyword } from './global-keyword'

export type TJustifyContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'normal'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | `safe ${'center' | 'start' | 'end' | 'left' | 'right'}`
  | `unsafe ${'center' | 'start' | 'end' | 'left' | 'right'}`
  | TGlobalKeyword
