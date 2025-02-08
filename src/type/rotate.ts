import type { TGlobalKeyword } from './global-keyword'

export type TRotate =
  | 'none'
  | `${number}${'deg' | 'turn' | 'rad'}` // Angle value
  | `x ${number}${'deg' | 'turn' | 'rad'}` // Axis plus angle
  | `y ${number}${'deg' | 'turn' | 'rad'}`
  | `z ${number}${'deg' | 'turn' | 'rad'}`
  | `${number} ${number} ${number} ${number}${'deg' | 'turn' | 'rad'}` // Vector plus angle
  | TGlobalKeyword
