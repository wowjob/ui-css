import type { TGlobalKeyword } from './global-keyword';
export type TScrollPadding = TGlobalKeyword | string | number | [
    string | number,
    (string | number)?,
    (string | number)?,
    (string | number)?
] | {
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    left?: string | number;
};
