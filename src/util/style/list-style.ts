import type { TListStyle } from '../../type'

export const normalizeListStyle = (value: TListStyle): string => {
  if (!value || value === 'none') {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  if (typeof value === 'object') {
    const { type = 'none', image = '', position = '' } = value
    return [type, image, position].filter((part) => part).join(' ')
  }

  return value
}
