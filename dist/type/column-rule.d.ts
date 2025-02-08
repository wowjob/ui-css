import type { TBorderStyle } from './border';
import type { TGlobalKeyword } from './global-keyword';
export type TColumnRule = string | {
    color?: string;
    style?: TBorderStyle;
    width?: string | number;
} | TGlobalKeyword;
