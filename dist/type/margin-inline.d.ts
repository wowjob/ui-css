import type { TGlobalKeyword } from './global-keyword';
export type TMarginInline = number | `${number}px` | `${number}em` | `${number}%` | `calc(${string})` | `anchor-size(${string})` | 'auto' | [TMarginInline, TMarginInline?] | {
    start?: TMarginInline;
    end?: TMarginInline;
} | TGlobalKeyword;
