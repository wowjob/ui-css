import type { TGlobalKeyword } from './global-keyword';
export type TOverflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | `${'hidden' | 'visible'} ${'hidden' | 'visible'}` | {
    x?: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto';
    y?: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto';
} | TGlobalKeyword;
