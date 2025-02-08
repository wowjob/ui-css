import type { TTransitionBehavior } from '../../type'

export const normalizeTransitionBehavior = (
  transitionBehavior: TTransitionBehavior
): string => {
  if (!transitionBehavior) {
    return 'normal' // Default value
  }
  return transitionBehavior
}
