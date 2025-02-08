import type { TDirectionalUnit } from '../type'

export const getValue = (
  value: undefined | null | string | number | TDirectionalUnit,
): string | number | TDirectionalUnit =>
  value === undefined ||
  value === null ||
  (typeof value === 'string' && value.trim() === '') ||
  value === 0
    ? '0'
    : value
