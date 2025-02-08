import type { TGlobalKeyword } from './global-keyword';
import type { TDirectionalUnit } from './directional-unit';
export type TBorderRadius = number | TGlobalKeyword | TDirectionalUnit | [
    (number | TDirectionalUnit | (string & {}))?,
    (number | TDirectionalUnit | (string & {}))?,
    (number | TDirectionalUnit | (string & {}))?,
    (number | TDirectionalUnit | (string & {}))?
] | {
    topLeft?: number | TDirectionalUnit | (string & {});
    topRight?: number | TDirectionalUnit | (string & {});
    bottomRight?: number | TDirectionalUnit | (string & {});
    bottomLeft?: number | TDirectionalUnit | (string & {});
} | (string & {});
