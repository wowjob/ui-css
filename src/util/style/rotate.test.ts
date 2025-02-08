import { describe, expect, test } from 'bun:test'
import { normalizeRotate } from './rotate'

describe('normalizeRotate', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeRotate(null as any)).toBe('none')
    expect(normalizeRotate(undefined as any)).toBe('none')
    expect(normalizeRotate('none')).toBe('none')
  })

  test('should return angle values as-is', () => {
    expect(normalizeRotate('90deg')).toBe('90deg')
    expect(normalizeRotate('0.25turn')).toBe('0.25turn')
    expect(normalizeRotate('1.57rad')).toBe('1.57rad')
  })

  test('should handle axis plus angle syntax', () => {
    expect(normalizeRotate('x 90deg')).toBe('x 90deg')
    expect(normalizeRotate('y 0.25turn')).toBe('y 0.25turn')
    expect(normalizeRotate('z 1.57rad')).toBe('z 1.57rad')
  })

  test('should handle vector plus angle syntax', () => {
    expect(normalizeRotate('1 1 1 90deg')).toBe('1 1 1 90deg')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeRotate('inherit')).toBe('inherit')
    expect(normalizeRotate('initial')).toBe('initial')
    expect(normalizeRotate('revert')).toBe('revert')
    expect(normalizeRotate('revert-layer')).toBe('revert-layer')
    expect(normalizeRotate('unset')).toBe('unset')
  })
})
