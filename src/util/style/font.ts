import type { TFont } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeFont = (font: TFont): string => {
  if (!font) {
    return '' // Default empty value
  }

  if (typeof font === 'string') {
    return font // Shorthand string
  }

  const {
    family = '',
    size = '',
    stretch = '',
    style = '',
    variant = '',
    weight = '',
    lineHeight = '',
  } = font

  const normalizedFontSize =
    (typeof size === 'string' && isPx(size)) || typeof size === 'number'
      ? convertToRem(size)
      : size

  const sizeWithLineHeight =
    normalizedFontSize && lineHeight
      ? `${normalizedFontSize}/${lineHeight}`
      : normalizedFontSize

  return [style, variant, weight, stretch, sizeWithLineHeight, family]
    .filter(Boolean) // Remove empty values
    .join(' ')
}
