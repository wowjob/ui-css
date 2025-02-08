import type { TBorderStyle } from './border';
import type { TGlobalKeyword } from './global-keyword';
export type TBorderBlock = {
    width?: string | number;
    style?: TBorderStyle;
    color?: string;
} | TGlobalKeyword | (string & {});
