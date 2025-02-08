import type { TZoom } from '../../type'

export const normalizeZoom = (zoom: TZoom): string => {
  if (!zoom || zoom === 'normal') {
    return 'normal' // Default value
  }

  return typeof zoom === 'number' ? zoom.toString() : zoom
}
