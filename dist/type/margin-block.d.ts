import type { TGlobalKeyword } from './global-keyword';
export type TMarginBlock = number | `${number}px` | `${number}em` | `${number}%` | `calc(${string})` | `anchor-size(${string})` | 'auto' | [TMarginBlock, TMarginBlock?] | {
    start?: TMarginBlock;
    end?: TMarginBlock;
} | TGlobalKeyword;
