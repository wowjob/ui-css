import type { TGlobalKeyword } from './global-keyword';
export type TOutlineColor = `#${string}` | `rgb(${string})` | `rgba(${string})` | string | TGlobalKeyword;
export type TOutlineStyle = 'auto' | 'none' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | TGlobalKeyword;
export type TOutlineWidth = 'thin' | 'medium' | 'thick' | `${number}px` | `${number}em` | `${number}rem` | number | TGlobalKeyword;
export type TOutline = Array<string> | {
    color?: TOutlineColor;
    style?: TOutlineStyle;
    width?: TOutlineWidth;
} | TGlobalKeyword | string;
