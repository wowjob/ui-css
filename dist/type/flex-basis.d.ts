import type { TGlobalKeyword } from './global-keyword';
import type { TDirectionalUnit } from './directional-unit';
export type TFlexBasis = 'auto' | TGlobalKeyword | TDirectionalUnit | (string & {});
