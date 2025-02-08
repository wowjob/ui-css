import { describe, expect, test } from 'bun:test'
import { normalizeOpacity } from './opacity'

describe('normalizeOpacity', () => {
  test('should return "1" for null or undefined', () => {
    expect(normalizeOpacity(null as any)).toBe('1')
    expect(normalizeOpacity(undefined as any)).toBe('1')
  })

  test('should handle numeric values as-is', () => {
    expect(normalizeOpacity(0.9)).toBe(0.9)
    expect(normalizeOpacity(1)).toBe(1)
    expect(normalizeOpacity(0)).toBe(0)
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeOpacity('90%')).toBe('90%')
    expect(normalizeOpacity('100%')).toBe('100%')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeOpacity('inherit')).toBe('inherit')
    expect(normalizeOpacity('initial')).toBe('initial')
    expect(normalizeOpacity('revert')).toBe('revert')
    expect(normalizeOpacity('revert-layer')).toBe('revert-layer')
    expect(normalizeOpacity('unset')).toBe('unset')
  })
})
