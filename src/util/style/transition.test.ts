import { describe, expect, test } from 'bun:test'
import { normalizeTransition } from './transition'

describe('normalizeTransition', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeTransition(null as any)).toBe('none')
    expect(normalizeTransition(undefined as any)).toBe('none')
  })

  test('should return valid string values as-is', () => {
    expect(normalizeTransition('all 1s ease-in')).toBe('all 1s ease-in')
    expect(normalizeTransition('height 2s ease-out, opacity 1s linear')).toBe(
      'height 2s ease-out, opacity 1s linear'
    )
  })

  test('should join array values with commas', () => {
    expect(normalizeTransition(['all', '1s', 'ease-in'])).toBe(
      'all, 1s, ease-in'
    )
    expect(normalizeTransition(['opacity', '2s', 'ease'])).toBe(
      'opacity, 2s, ease'
    )
  })

  test('should normalize object values', () => {
    expect(
      normalizeTransition({
        property: 'all',
        duration: '1s',
        timingFunction: 'ease-in',
        delay: '0.5s',
      })
    ).toBe('all 1s ease-in 0.5s')

    expect(
      normalizeTransition({
        property: 'opacity',
        duration: '2s',
        timingFunction: 'linear',
      })
    ).toBe('opacity 2s linear')
  })

  test('should handle global keyword values in object', () => {
    expect(
      normalizeTransition({
        property: 'inherit',
        duration: 'initial',
        timingFunction: 'unset',
        delay: 'revert-layer',
      })
    ).toBe('inherit initial unset revert-layer')
  })
})
