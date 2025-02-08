import type { TScrollBehavior } from '../../type'

export const normalizeScrollBehavior = (
  scrollBehavior: TScrollBehavior
): string => {
  if (!scrollBehavior) {
    return 'auto' // Default value
  }
  return scrollBehavior
}
