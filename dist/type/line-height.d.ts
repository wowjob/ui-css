import type { TGlobalKeyword } from './global-keyword';
export type TLineHeight = 'normal' | number | (string & {}) | `${number}px` | `${number}em` | `${number}rem` | `${number}%` | TGlobalKeyword;
