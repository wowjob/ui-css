import type { TImageRendering } from '../../type'

export const normalizeImageRendering = (value: TImageRendering): string => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
