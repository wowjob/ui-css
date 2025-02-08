import type { TGlobalKeyword } from './global-keyword';
export type TTextEmphasisStyle = TGlobalKeyword | 'none' | 'filled' | 'open' | 'dot' | 'circle' | 'double-circle' | 'triangle' | `${'filled' | 'open'} sesame` | (string & {});
export type TTextEmphasisColor = TGlobalKeyword | string;
export type TTextEmphasisPosition = TGlobalKeyword | 'auto' | 'over' | 'under' | `${'over' | 'under'} ${'right' | 'left'}` | `${'right' | 'left'} ${'over' | 'under'}`;
export type TTextEmphasis = string | {
    style?: TTextEmphasisStyle;
    color?: TTextEmphasisColor;
    position?: TTextEmphasisPosition;
};
