import type { TGlobalKeyword } from './global-keyword';
export type TTextDecorationLine = TGlobalKeyword | 'none' | 'underline' | 'overline' | 'line-through' | 'blink' | `${'underline' | 'overline' | 'line-through' | 'blink'} ${string}`;
export type TTextDecorationStyle = TGlobalKeyword | 'solid' | 'double' | 'dotted' | 'dashed' | 'wavy';
export type TTextDecorationThickness = TGlobalKeyword | 'auto' | 'from-font' | string | number;
export type TTextDecorationColor = TGlobalKeyword | string;
export type TTextDecoration = string | Array<string | number> | {
    line?: TTextDecorationLine;
    style?: TTextDecorationStyle;
    color?: TTextDecorationColor;
    thickness?: TTextDecorationThickness;
};
