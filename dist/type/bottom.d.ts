import type { TGlobalKeyword } from './global-keyword';
export type TBottom = number | (string & {}) | `${number}px` | `${number}em` | `${number}rem` | `${number}%` | `calc(${string})` | `anchor(${string})` | `anchor-size(${string})` | 'auto' | TGlobalKeyword;
