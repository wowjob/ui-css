import type { TGlobalKeyword } from './global-keyword';
export type TInset = number | `${number}px` | `${number}em` | `${number}rem` | `${number}%` | `${number}vh` | `${number}vw` | `${number}vmin` | `${number}vmax` | 'auto' | [TInset, TInset?, TInset?, TInset?] | `calc(${string})` | `anchor(${string})` | `anchor-size(${string})` | TGlobalKeyword | (string & {});
