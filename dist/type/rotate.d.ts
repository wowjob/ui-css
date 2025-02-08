import type { TGlobalKeyword } from './global-keyword';
export type TRotate = 'none' | `${number}${'deg' | 'turn' | 'rad'}` | `x ${number}${'deg' | 'turn' | 'rad'}` | `y ${number}${'deg' | 'turn' | 'rad'}` | `z ${number}${'deg' | 'turn' | 'rad'}` | `${number} ${number} ${number} ${number}${'deg' | 'turn' | 'rad'}` | TGlobalKeyword;
