import type { TMask } from '../../type'

export const normalizeMask = (value: TMask): string => {
  if (!value) {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  if (typeof value === 'object') {
    const {
      mode = '',
      image = '',
      origin = '',
      repeat = '',
      size = '',
      composite = '',
      type = '',
    } = value

    // Filter and combine valid properties
    return [mode, image, origin, repeat, size, composite, type]
      .filter((part) => !!part && typeof part === 'string')
      .join(' ')
  }

  return value as string
}
