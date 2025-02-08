import { describe, expect, test } from 'bun:test'
import { normalizeStrokeLinejoin } from './stroke-linejoin'

describe('normalizeStrokeLinejoin', () => {
  test('should return "miter" for null or undefined', () => {
    expect(normalizeStrokeLinejoin(null as any)).toBe('miter')
    expect(normalizeStrokeLinejoin(undefined as any)).toBe('miter')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeStrokeLinejoin('bevel')).toBe('bevel')
    expect(normalizeStrokeLinejoin('miter')).toBe('miter')
    expect(normalizeStrokeLinejoin('round')).toBe('round')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeStrokeLinejoin('inherit')).toBe('inherit')
    expect(normalizeStrokeLinejoin('initial')).toBe('initial')
    expect(normalizeStrokeLinejoin('revert')).toBe('revert')
    expect(normalizeStrokeLinejoin('revert-layer')).toBe('revert-layer')
    expect(normalizeStrokeLinejoin('unset')).toBe('unset')
  })
})
