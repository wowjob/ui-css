import type { TGlobalKeyword } from './global-keyword';
export type TPlaceContentBase = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'baseline' | 'first baseline' | 'last baseline' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
export type TPlaceContent = TPlaceContentBase | `${TPlaceContentBase} ${TPlaceContentBase}` | TGlobalKeyword;
