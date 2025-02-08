import type { TBorderStyle } from './border';
import type { TGlobalKeyword } from './global-keyword';
export type TBorderInlineStart = {
    width?: string | number;
    style?: TBorderStyle;
    color?: string;
} | TGlobalKeyword | (string & {});
