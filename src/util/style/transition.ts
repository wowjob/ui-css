import type { TTransition } from '../../type'

const convertToMs = (value: number | string): string => {
  return typeof value === 'number' ? `${value}ms` : value
}

export const normalizeTransition = (transition: TTransition): string => {
  if (!transition) {
    return 'none' // Default value
  }

  if (typeof transition === 'string') {
    return transition
  }

  if (Array.isArray(transition)) {
    return transition.map(convertToMs).join(', ')
  }

  const { property, duration, timingFunction, delay } = transition

  return [
    property,
    duration ? convertToMs(duration) : undefined,
    timingFunction,
    delay ? convertToMs(delay) : undefined,
  ]
    .filter(Boolean)
    .join(' ')
}
