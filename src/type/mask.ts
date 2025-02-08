import type { TGlobalKeyword } from './global-keyword'

export type TMaskMode = 'alpha' | 'luminance' | 'match-source' | TGlobalKeyword

export type TMaskImage =
  | 'none'
  | `url(${string})`
  | `linear-gradient(${string})`
  | `image(${string})`
  | TGlobalKeyword

export type TMaskOrigin =
  | 'content-box'
  | 'padding-box'
  | 'border-box'
  | 'fill-box'
  | 'stroke-box'
  | 'view-box'
  | '-webkit-mask-origin'
  | 'content'
  | 'padding'
  | 'border'
  | TGlobalKeyword

export type TMaskRepeat =
  | 'repeat-x'
  | 'repeat-y'
  | 'repeat'
  | 'space'
  | 'round'
  | 'no-repeat'
  | `${string} ${string}`
  | TGlobalKeyword

export type TMaskSize =
  | 'cover'
  | 'contain'
  | `${number}${'px' | 'em' | '%' | 'rem'}`
  | `${number}${'px' | 'em' | '%' | 'rem'} auto`
  | 'auto'
  | TGlobalKeyword

export type TMaskComposite =
  | 'add'
  | 'subtract'
  | 'intersect'
  | 'exclude'
  | TGlobalKeyword

export type TMaskType = 'luminance' | 'alpha' | TGlobalKeyword

export type TMask =
  | {
      mode?: TMaskMode
      image?: TMaskImage
      origin?: TMaskOrigin
      repeat?: TMaskRepeat
      size?: TMaskSize
      composite?: TMaskComposite
      type?: TMaskType
    }
  | TGlobalKeyword
  | string
