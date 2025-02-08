import type { TBorderImage } from '../../type'

export const normalizeBorderImage = (borderImage: TBorderImage): string => {
  if (typeof borderImage === 'string') {
    return borderImage
  }

  if (borderImage === null || borderImage === undefined) {
    return 'none'
  }

  if (Array.isArray(borderImage)) {
    return borderImage.join(' ')
  }

  if (typeof borderImage === 'object') {
    const {
      source = 'none',
      slice = '100%',
      width = 1,
      outset = 0,
      repeat = 'stretch',
    } = borderImage

    return [source, slice, width, outset, repeat].join(' ')
  }

  return 'none 100% 1 0 stretch'
}
