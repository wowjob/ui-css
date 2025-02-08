import { describe, expect, test } from 'bun:test'
import { normalizeBreakInside } from './break-inside'

describe('normalizeBreakInside', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeBreakInside(null as any)).toBe('auto')
    expect(normalizeBreakInside(undefined as any)).toBe('auto')
  })

  test('should return break-inside values as-is', () => {
    expect(normalizeBreakInside('auto')).toBe('auto')
    expect(normalizeBreakInside('avoid')).toBe('avoid')
    expect(normalizeBreakInside('avoid-page')).toBe('avoid-page')
    expect(normalizeBreakInside('avoid-column')).toBe('avoid-column')
    expect(normalizeBreakInside('avoid-region')).toBe('avoid-region')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeBreakInside('inherit')).toBe('inherit')
    expect(normalizeBreakInside('initial')).toBe('initial')
    expect(normalizeBreakInside('revert')).toBe('revert')
    expect(normalizeBreakInside('revert-layer')).toBe('revert-layer')
    expect(normalizeBreakInside('unset')).toBe('unset')
  })
})
