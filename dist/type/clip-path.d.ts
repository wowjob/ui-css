import type { TGlobalKeyword } from './global-keyword';
export type TClipPath = 'none' | `url(${string})` | 'margin-box' | 'border-box' | 'padding-box' | 'content-box' | 'fill-box' | 'stroke-box' | 'view-box' | `inset(${string})` | `circle(${string})` | `ellipse(${string})` | `polygon(${string})` | `path(${string})` | `rect(${string})` | `xywh(${string})` | `${string} ${string}` | TGlobalKeyword;
