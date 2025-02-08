import type { TGlobalKeyword } from './global-keyword';
type TFilterFunction = `url(${string})` | `blur(${number | string})` | `brightness(${number | string})` | `contrast(${number | string})` | `drop-shadow(${string})` | `grayscale(${number | string})` | `hue-rotate(${number | string})` | `invert(${number | string})` | `opacity(${number | string})` | `sepia(${number | string})` | `saturate(${number | string})`;
export type TBackdropFilter = 'none' | TFilterFunction | `${TFilterFunction} ${string}` | TGlobalKeyword | (string & {});
export {};
