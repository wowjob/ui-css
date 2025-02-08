import type { TGlobalKeyword } from './global-keyword';
export type TInsetInline = number | `${number}px` | `${number}em` | `${number}rem` | `${number}%` | 'auto' | `anchor(${string})` | `anchor-size(${string}, ${string | number})` | [TInsetInline, TInsetInline?] | {
    start?: TInsetInline;
    end?: TInsetInline;
} | TGlobalKeyword;
