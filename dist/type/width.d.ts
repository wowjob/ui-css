import type { TGlobalKeyword } from './global-keyword';
export type TWidth = TGlobalKeyword | (string & {}) | number | 'auto' | 'stretch' | 'max-content' | 'min-content' | 'fit-content' | `fit-content(${string | number})` | `anchor-size(${string}, ${string | number})` | `minmax(${string | number}, ${string | number})`;
