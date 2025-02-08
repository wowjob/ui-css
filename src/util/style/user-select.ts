import type { TUserSelect } from '../../type'

export const normalizeUserSelect = (userSelect: TUserSelect): string => {
  if (!userSelect) {
    return 'auto' // Default value
  }
  return userSelect
}
