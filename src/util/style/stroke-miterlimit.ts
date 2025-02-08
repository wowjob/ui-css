import type { TStrokeMiterlimit } from '../../type'

export const normalizeStrokeMiterlimit = (
  strokeMiterlimit: TStrokeMiterlimit
): string => {
  if (strokeMiterlimit === null || strokeMiterlimit === undefined) {
    return '4' // Default value for stroke-miterlimit
  }
  return typeof strokeMiterlimit === 'number'
    ? strokeMiterlimit.toString()
    : strokeMiterlimit
}
