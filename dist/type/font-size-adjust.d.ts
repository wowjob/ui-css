import type { TGlobalKeyword } from './global-keyword';
export type TFontSizeAdjust = 'none' | 'from-font' | number | `${'ex-height' | 'ch-width'} ${number | 'from-font'}` | TGlobalKeyword;
