import type { TGlobalKeyword } from './global-keyword'

export type TClipPath =
  | 'none'
  | `url(${string})` // <clip-source> values
  | 'margin-box'
  | 'border-box'
  | 'padding-box'
  | 'content-box'
  | 'fill-box'
  | 'stroke-box'
  | 'view-box'
  | `inset(${string})` // <basic-shape> inset
  | `circle(${string})` // <basic-shape> circle
  | `ellipse(${string})` // <basic-shape> ellipse
  | `polygon(${string})` // <basic-shape> polygon
  | `path(${string})` // <basic-shape> path
  | `rect(${string})` // <basic-shape> rect
  | `xywh(${string})` // Custom <basic-shape>
  | `${string} ${string}` // Box and shape values combined
  | TGlobalKeyword
