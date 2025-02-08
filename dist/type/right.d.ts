import type { TGlobalKeyword } from './global-keyword';
export type TRight = `${number}px` | `${number}em` | `${number}rem` | `${number}%` | `calc(${string})` | `anchor(${string})` | `anchor-size(${string})` | 'auto' | number | (string & {}) | TGlobalKeyword;
