import { isPx } from '../is-px'

export const convertToRem = (value: number | string): string => {
  if (!value) {
    return '0'
  }

  if (typeof value === 'number') {
    return value === 0 ? '0' : `${value / 16}rem`
  }

  if (isPx(value)) {
    const numberValue = parseFloat(value)
    return numberValue === 0 ? '0' : `${numberValue / 16}rem`
  }

  return value
}
