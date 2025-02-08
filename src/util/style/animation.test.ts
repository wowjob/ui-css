import { describe, expect, test } from 'bun:test'
import { normalizeAnimation } from './animation'

describe('normalizeAnimation', () => {
  test('should return a string animation value as-is', () => {
    expect(normalizeAnimation('fade-in 2s ease-in')).toBe('fade-in 2s ease-in')
  })

  test('should normalize an animation object with defaults', () => {
    expect(
      normalizeAnimation({
        name: 'fade-in',
        duration: 2000,
      }),
    ).toBe('fade-in 2s ease 0s 1 normal none running replace')
  })

  test('should normalize an animation object with millisecond duration', () => {
    expect(
      normalizeAnimation({
        name: 'fade-in',
        duration: 1000,
      }),
    ).toBe('fade-in 1s ease 0s 1 normal none running replace')
  })

  test('should handle invalid or missing values gracefully', () => {
    expect(normalizeAnimation(undefined as any)).toBe('none')
    expect(normalizeAnimation(null as any)).toBe('none')
  })

  test('should normalize all properties in an animation object', () => {
    expect(
      normalizeAnimation({
        name: 'slide-in',
        duration: '1.5s',
        timingFunction: 'linear',
        delay: '0.5s',
        iterationCount: 'infinite',
        direction: 'alternate',
        fillMode: 'both',
        playState: 'paused',
        composition: 'add',
      }),
    ).toBe('slide-in 1.5s linear 0.5s infinite alternate both paused add')
  })
})
