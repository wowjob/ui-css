import type { TGlobalKeyword } from './global-keyword';
export type TPlaceItemBase = 'center' | 'normal' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end' | 'anchor-center' | 'baseline' | 'first baseline' | 'last baseline' | 'stretch';
export type TPlaceItems = TPlaceItemBase | `${TPlaceItemBase} ${TPlaceItemBase}` | `${TPlaceItemBase} legacy` | TGlobalKeyword;
