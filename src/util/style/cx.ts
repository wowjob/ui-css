import type { TCx } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeCx = (cx: TCx): string => {
  if (!cx) {
    return '' // Default empty value
  }

  if ((typeof cx === 'string' && isPx(cx)) || typeof cx === 'number') {
    return convertToRem(cx)
  }

  return cx
}
