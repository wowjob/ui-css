import type { TGlobalKeyword } from './global-keyword';
export type TListStyle = 'none' | 'square' | 'circle' | 'disc' | 'decimal' | 'lower-roman' | 'upper-roman' | 'georgian' | `url(${string})` | 'inside' | 'outside' | `${string} ${string}` | `${string} ${string} ${string}` | {
    type?: 'disc' | 'circle' | 'square' | 'decimal' | 'georgian' | 'trad-chinese-informal' | 'kannada' | '"-"' | 'custom-counter-style' | 'none';
    image?: 'none' | `url(${string})`;
    position?: 'inside' | 'outside' | TGlobalKeyword;
} | TGlobalKeyword;
