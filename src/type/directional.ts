import type { TDirectionalUnit } from './directional-unit'

export type TDirectionalBase<T> =
  | T
  | number
  | TDirectionalUnit
  | [
      (T | number | TDirectionalUnit | (string & {}))?,
      (T | number | TDirectionalUnit | (string & {}))?,
      (T | number | TDirectionalUnit | (string & {}))?,
      (T | number | TDirectionalUnit | (string & {}))?
    ]

export type TDirectionalSimple<T> = TDirectionalBase<T> | (string & {})

export type TDirectional<T> =
  | TDirectionalBase<T>
  | {
      top?: T | number | TDirectionalUnit
      right?: T | number | TDirectionalUnit
      bottom?: T | number | TDirectionalUnit
      left?: T | number | TDirectionalUnit
    }
  | (string & {})
