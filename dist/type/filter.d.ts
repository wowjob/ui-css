import type { TGlobalKeyword } from './global-keyword';
export type TFilter = 'none' | `blur(${string})` | `brightness(${string})` | `contrast(${string})` | `drop-shadow(${string})` | `grayscale(${string})` | `hue-rotate(${string})` | `invert(${string})` | `opacity(${string})` | `saturate(${string})` | `sepia(${string})` | `url(${string})` | TGlobalKeyword;
