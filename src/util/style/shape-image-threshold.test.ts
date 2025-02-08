import { describe, expect, test } from 'bun:test'
import { normalizeShapeImageThreshold } from './shape-image-threshold'

describe('normalizeShapeImageThreshold', () => {
  test('should return "0" for null or undefined', () => {
    expect(normalizeShapeImageThreshold(null as any)).toBe('0')
    expect(normalizeShapeImageThreshold(undefined as any)).toBe('0')
  })

  test('should return valid <number> value as a string', () => {
    expect(normalizeShapeImageThreshold(0.7)).toBe('0.7')
    expect(normalizeShapeImageThreshold(1)).toBe('1')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeShapeImageThreshold('inherit')).toBe('inherit')
    expect(normalizeShapeImageThreshold('initial')).toBe('initial')
    expect(normalizeShapeImageThreshold('revert')).toBe('revert')
    expect(normalizeShapeImageThreshold('revert-layer')).toBe('revert-layer')
    expect(normalizeShapeImageThreshold('unset')).toBe('unset')
  })
})
