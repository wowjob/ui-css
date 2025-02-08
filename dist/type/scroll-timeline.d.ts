import type { TGlobalKeyword } from './global-keyword';
export type TScrollTimeline = TGlobalKeyword | 'none' | string | `${string | 'none'} ${'block' | 'inline' | 'x' | 'y'}`;
