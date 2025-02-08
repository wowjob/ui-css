import type { TDirectional, TDirectionalUnit } from '../../type'
import { condensedFour } from '../condensed'
import { convertToRem } from '../convert-to-rem'
import { getValue } from '../get-value'
import { isPx } from '../is-px'

export const normalizeDirectional = <T extends string>(
  value: TDirectional<T> = 0,
  convertUnit: (v: number | TDirectionalUnit | string) => string = (v) =>
    (v || '').toString(),
) => {
  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertUnit(value)
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return '0'
    }

    if (value.length > 0) {
      return condensedFour(value.map(getValue).map(convertUnit))
    }
  }

  if (value === null || value === undefined) {
    return getValue(value)
  }

  if (
    typeof value === 'object' &&
    ('top' in value || 'bottom' in value || 'right' in value || 'left' in value)
  ) {
    const { top, right, bottom, left } = value || {}

    return condensedFour(
      [top, right, bottom, left].map(getValue).map(convertUnit),
    )
  }

  return '0'
}
