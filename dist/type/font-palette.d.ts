import type { TGlobalKeyword } from './global-keyword';
export type TFontPalette = 'normal' | `--${string}` | `palette-mix(${string})` | TGlobalKeyword;
