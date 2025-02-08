import type { TAnimation } from '../../type'

export const normalizeAnimation = (animation: TAnimation): string => {
  if (typeof animation === 'string') {
    return animation
  }

  if (Array.isArray(animation)) {
    return animation.join(' ')
  }

  if (animation === undefined || animation === null) {
    return 'none'
  }

  if (typeof animation === 'object') {
    const {
      name = 'none',
      duration = 0,
      timingFunction = 'ease',
      delay = 0,
      iterationCount = 1,
      direction = 'normal',
      fillMode = 'none',
      playState = 'running',
      composition = 'replace',
    } = animation

    return [
      name,
      typeof duration === 'number' ? `${duration / 1000}s` : duration,
      timingFunction,
      typeof delay === 'number' ? `${delay / 1000}s` : delay,
      iterationCount,
      direction,
      fillMode,
      playState,
      composition,
    ].join(' ')
  }

  return 'none 0s ease 0s 1 normal none running replace'
}
