import type { TGlobalKeyword } from './global-keyword';
export type TInsetBlock = number | `${number}px` | `${number}em` | `${number}rem` | `${number}%` | 'auto' | `anchor(${string})` | `anchor-size(${string}, ${string | number})` | [TInsetBlock, TInsetBlock?] | {
    start?: TInsetBlock;
    end?: TInsetBlock;
} | TGlobalKeyword;
