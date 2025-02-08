import type { TGridRow } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeGridRow = (value: TGridRow): string | number => {
  if (!value) {
    return 'auto' // Default value
  }

  let start: string | number = 'auto'
  let end: string | number = 'auto'

  if (Array.isArray(value)) {
    ;[start, end] = value
  } else if (
    typeof value === 'object' &&
    ('start' in value || 'end' in value)
  ) {
    start = value.start ?? 'auto'
    end = value.end ?? 'auto'
  } else if (typeof value === 'string' || typeof value === 'number') {
    return value
  }

  const normalize = (val: string | number): string | number => {
    if (typeof val === 'string') {
      return isPx(val) ? convertToRem(val) : val
    }
    return val
  }

  return `${normalize(start)} / ${normalize(end)}`
}
