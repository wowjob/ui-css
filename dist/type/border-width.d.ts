import type { TDirectional } from './directional';
import type { TGlobalKeyword } from './global-keyword';
export type TBorderWidth = TDirectional<TGlobalKeyword | string> | number | (string & {});
