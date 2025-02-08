import { describe, expect, test } from 'bun:test'
import { normalizeTransformOrigin } from './transform-origin'

describe('normalizeTransformOrigin', () => {
  test('should return "50% 50% 0" for null or undefined', () => {
    expect(normalizeTransformOrigin(null as any)).toBe('50% 50% 0')
    expect(normalizeTransformOrigin(undefined as any)).toBe('50% 50% 0')
  })

  test('should return valid single value syntax as-is', () => {
    expect(normalizeTransformOrigin('2px')).toBe('2px')
    expect(normalizeTransformOrigin('bottom')).toBe('bottom')
  })

  test('should return valid two-value syntax as-is', () => {
    expect(normalizeTransformOrigin('3cm 2px')).toBe('3cm 2px')
    expect(normalizeTransformOrigin('left 2px')).toBe('left 2px')
    expect(normalizeTransformOrigin('right top')).toBe('right top')
  })

  test('should return valid three-value syntax as-is', () => {
    expect(normalizeTransformOrigin('2px 30% 10px')).toBe('2px 30% 10px')
    expect(normalizeTransformOrigin('left 5px -3px')).toBe('left 5px -3px')
    expect(normalizeTransformOrigin('right bottom 2cm')).toBe(
      'right bottom 2cm'
    )
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTransformOrigin('inherit')).toBe('inherit')
    expect(normalizeTransformOrigin('initial')).toBe('initial')
    expect(normalizeTransformOrigin('revert')).toBe('revert')
    expect(normalizeTransformOrigin('revert-layer')).toBe('revert-layer')
    expect(normalizeTransformOrigin('unset')).toBe('unset')
  })
})
