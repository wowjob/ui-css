import { describe, expect, test } from 'bun:test'
import { normalizeScale } from './scale'

describe('normalizeScale', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeScale(null as any)).toBe('none')
    expect(normalizeScale(undefined as any)).toBe('none')
    expect(normalizeScale('none')).toBe('none')
  })

  test('should handle single values', () => {
    expect(normalizeScale(2)).toBe('2')
    expect(normalizeScale('50%')).toBe('50%')
  })

  test('should handle two values', () => {
    expect(normalizeScale('2 0.5')).toBe('2 0.5')
  })

  test('should handle three values', () => {
    expect(normalizeScale('200% 50% 200%')).toBe('200% 50% 200%')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeScale('inherit')).toBe('inherit')
    expect(normalizeScale('initial')).toBe('initial')
    expect(normalizeScale('revert')).toBe('revert')
    expect(normalizeScale('revert-layer')).toBe('revert-layer')
    expect(normalizeScale('unset')).toBe('unset')
  })
})
