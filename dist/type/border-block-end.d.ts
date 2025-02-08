import type { TBorderStyle } from './border';
import type { TGlobalKeyword } from './global-keyword';
export type TBorderBlockEnd = {
    width?: string | number;
    style?: TBorderStyle;
    color?: string;
} | TGlobalKeyword | (string & {});
