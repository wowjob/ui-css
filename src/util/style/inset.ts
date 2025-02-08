import type { TInset } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeInset = (value: TInset): string | number => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  if (Array.isArray(value)) {
    const [top = '0', right = top, bottom = top, left = right] = value.map(
      (item) => {
        if (typeof item === 'string') {
          return isPx(item) ? convertToRem(item) : item
        }
        if (typeof item === 'number') {
          return convertToRem(item)
        }
        return '0'
      }
    )

    // Apply shorthand logic
    if (top === right && top === bottom && top === left) {
      return top // All sides are the same
    }

    if (top === bottom && right === left) {
      return `${top} ${right}` // Top/Bottom and Right/Left are the same
    }

    if (top === bottom) {
      return `${top} ${right} ${bottom}` // Top/Bottom are the same, Left/Right differ
    }

    return `${top} ${right} ${bottom} ${left}` // All sides differ
  }

  return value
}
