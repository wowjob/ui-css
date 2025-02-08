import type { TGridTemplateAreas } from '../../type'

export const normalizeGridTemplateAreas = (
  value: TGridTemplateAreas
): string => {
  if (!value || value === 'none') {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  if (Array.isArray(value)) {
    return value.map((area) => `"${area}"`).join(' ')
  }

  return value
}
