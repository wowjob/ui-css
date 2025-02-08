import type { TGlobalKeyword } from './global-keyword'

export type TBackground =
  | {
      color?: string
      image?: string
      positionX?: string | number
      positionY?: string | number
      size?: string
      repeat?: 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y'
      attachment?: 'scroll' | 'fixed' | 'local'
      origin?: 'border-box' | 'padding-box' | 'content-box'
      clip?: 'border-box' | 'padding-box' | 'content-box' | 'text'
      blendMode?: string
    }
  | TGlobalKeyword
  | (string & {})
