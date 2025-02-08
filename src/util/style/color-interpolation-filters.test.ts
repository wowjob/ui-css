import { describe, expect, test } from 'bun:test'
import { normalizeColorInterpolationFilters } from './color-interpolation-filters'

describe('normalizeColorInterpolationFilters', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeColorInterpolationFilters(null as any)).toBe('auto')
    expect(normalizeColorInterpolationFilters(undefined as any)).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeColorInterpolationFilters('auto')).toBe('auto')
    expect(normalizeColorInterpolationFilters('sRGB')).toBe('sRGB')
    expect(normalizeColorInterpolationFilters('linearRGB')).toBe('linearRGB')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeColorInterpolationFilters('inherit')).toBe('inherit')
    expect(normalizeColorInterpolationFilters('initial')).toBe('initial')
    expect(normalizeColorInterpolationFilters('revert')).toBe('revert')
    expect(normalizeColorInterpolationFilters('revert-layer')).toBe(
      'revert-layer'
    )
    expect(normalizeColorInterpolationFilters('unset')).toBe('unset')
  })
})
