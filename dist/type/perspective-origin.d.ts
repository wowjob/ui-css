import type { TGlobalKeyword } from './global-keyword';
export type TPerspectiveOrigin = `${number}%` | `${number}${'px' | 'em' | 'rem'}` | 'top' | 'bottom' | 'left' | 'right' | 'center' | `${'top' | 'bottom' | `${number}%`} ${'left' | 'right' | `${number}%`}` | `${'left' | 'right' | `${number}%`} ${'top' | 'bottom' | `${number}%`}` | TGlobalKeyword;
