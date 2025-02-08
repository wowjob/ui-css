import type { TGlobalKeyword } from './global-keyword'

export type TOpacity =
  | number // For values between 0 and 1 (e.g., `0.9`)
  | `${number}%` // Percentage values (e.g., `90%`)
  | TGlobalKeyword
