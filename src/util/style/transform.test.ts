import { describe, expect, test } from 'bun:test'
import { normalizeTransform } from './transform'

describe('normalizeTransform', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeTransform(null as any)).toBe('none')
    expect(normalizeTransform(undefined as any)).toBe('none')
    expect(normalizeTransform('none')).toBe('none')
  })

  test('should return valid function values as-is', () => {
    expect(normalizeTransform('matrix(1, 2, 3, 4, 5, 6)')).toBe(
      'matrix(1, 2, 3, 4, 5, 6)'
    )
    expect(
      normalizeTransform('translateX(10px) rotate(10deg) translateY(5px)')
    ).toBe('translateX(10px) rotate(10deg) translateY(5px)')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTransform('inherit')).toBe('inherit')
    expect(normalizeTransform('initial')).toBe('initial')
    expect(normalizeTransform('revert')).toBe('revert')
    expect(normalizeTransform('revert-layer')).toBe('revert-layer')
    expect(normalizeTransform('unset')).toBe('unset')
  })
})
