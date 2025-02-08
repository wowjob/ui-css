import type { TGlobalKeyword } from './global-keyword';
import type { TDirectionalUnit } from './directional-unit';
export type TBlockSize = number | TDirectionalUnit | 'auto' | 'max-content' | 'min-content' | 'fit-content' | `fit-content(${string})` | TGlobalKeyword | (string & {});
