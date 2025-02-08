import { describe, expect, test } from 'bun:test'
import { normalizeTransformStyle } from './transform-style'

describe('normalizeTransformStyle', () => {
  test('should return "flat" for null or undefined', () => {
    expect(normalizeTransformStyle(null as any)).toBe('flat')
    expect(normalizeTransformStyle(undefined as any)).toBe('flat')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTransformStyle('flat')).toBe('flat')
    expect(normalizeTransformStyle('preserve-3d')).toBe('preserve-3d')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTransformStyle('inherit')).toBe('inherit')
    expect(normalizeTransformStyle('initial')).toBe('initial')
    expect(normalizeTransformStyle('revert')).toBe('revert')
    expect(normalizeTransformStyle('revert-layer')).toBe('revert-layer')
    expect(normalizeTransformStyle('unset')).toBe('unset')
  })
})
