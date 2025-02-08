import { describe, expect, test } from 'bun:test'
import { normalizeStrokeLinecap } from './stroke-linecap'

describe('normalizeStrokeLinecap', () => {
  test('should return "butt" for null or undefined', () => {
    expect(normalizeStrokeLinecap(null as any)).toBe('butt')
    expect(normalizeStrokeLinecap(undefined as any)).toBe('butt')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeStrokeLinecap('butt')).toBe('butt')
    expect(normalizeStrokeLinecap('round')).toBe('round')
    expect(normalizeStrokeLinecap('square')).toBe('square')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeStrokeLinecap('inherit')).toBe('inherit')
    expect(normalizeStrokeLinecap('initial')).toBe('initial')
    expect(normalizeStrokeLinecap('revert')).toBe('revert')
    expect(normalizeStrokeLinecap('revert-layer')).toBe('revert-layer')
    expect(normalizeStrokeLinecap('unset')).toBe('unset')
  })
})
