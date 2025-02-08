import type { TGlobalKeyword } from './global-keyword';
export type TOffsetPath = 'none' | `url(${string})` | `ray(${string})` | `circle(${string})` | `ellipse(${string})` | `inset(${string})` | `polygon(${string})` | `path(${string})` | `rect(${string})` | `xywh(${string})` | 'content-box' | 'padding-box' | 'border-box' | 'fill-box' | 'stroke-box' | 'view-box' | TGlobalKeyword;
export type TOffsetDistance = `${number}${'px' | 'em' | 'rem' | '%'}` | TGlobalKeyword;
export type TOffsetRotate = 'auto' | `auto ${string}` | 'reverse' | `${number}${'deg' | 'turn' | 'rad' | 'grad'}` | TGlobalKeyword;
export type TOffset = string | Array<string> | {
    path?: TOffsetPath;
    distance?: TOffsetDistance;
    rotate?: TOffsetRotate;
} | TGlobalKeyword;
