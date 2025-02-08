import { describe, expect, test } from 'bun:test'
import { normalizeStrokeOpacity } from './stroke-opacity'

describe('normalizeStrokeOpacity', () => {
  test('should return "1" for null or undefined', () => {
    expect(normalizeStrokeOpacity(null as any)).toBe('1')
    expect(normalizeStrokeOpacity(undefined as any)).toBe('1')
  })

  test('should return numeric values as strings', () => {
    expect(normalizeStrokeOpacity(1)).toBe('1')
    expect(normalizeStrokeOpacity(0.3)).toBe('0.3')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeStrokeOpacity('50%')).toBe('50%')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeStrokeOpacity('inherit')).toBe('inherit')
    expect(normalizeStrokeOpacity('initial')).toBe('initial')
    expect(normalizeStrokeOpacity('revert')).toBe('revert')
    expect(normalizeStrokeOpacity('revert-layer')).toBe('revert-layer')
    expect(normalizeStrokeOpacity('unset')).toBe('unset')
  })
})
