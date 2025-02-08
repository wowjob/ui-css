import type { TGlobalKeyword } from './global-keyword';
export type TLightingColor = 'currentcolor' | `#${string}` | `rgb(${string})` | `rgba(${string})` | `hsl(${string})` | `hsla(${string})` | (string & {}) | TGlobalKeyword;
