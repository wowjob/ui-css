import type { TDirectional } from './directional';
import type { TGlobalKeyword } from './global-keyword';
type TMarginKeyword = 'auto' | TGlobalKeyword;
export type TMargin = TDirectional<TMarginKeyword>;
export {};
