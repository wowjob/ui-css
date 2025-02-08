import { describe, expect, test } from 'bun:test'
import { normalizeBreakBefore } from './break-before'

describe('normalizeBreakBefore', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeBreakBefore(null as any)).toBe('auto')
    expect(normalizeBreakBefore(undefined as any)).toBe('auto')
  })

  test('should return generic break values as-is', () => {
    expect(normalizeBreakBefore('auto')).toBe('auto')
    expect(normalizeBreakBefore('avoid')).toBe('avoid')
    expect(normalizeBreakBefore('always')).toBe('always')
    expect(normalizeBreakBefore('all')).toBe('all')
  })

  test('should return page break values as-is', () => {
    expect(normalizeBreakBefore('avoid-page')).toBe('avoid-page')
    expect(normalizeBreakBefore('page')).toBe('page')
    expect(normalizeBreakBefore('left')).toBe('left')
    expect(normalizeBreakBefore('right')).toBe('right')
    expect(normalizeBreakBefore('recto')).toBe('recto')
    expect(normalizeBreakBefore('verso')).toBe('verso')
  })

  test('should return column break values as-is', () => {
    expect(normalizeBreakBefore('avoid-column')).toBe('avoid-column')
    expect(normalizeBreakBefore('column')).toBe('column')
  })

  test('should return region break values as-is', () => {
    expect(normalizeBreakBefore('avoid-region')).toBe('avoid-region')
    expect(normalizeBreakBefore('region')).toBe('region')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeBreakBefore('inherit')).toBe('inherit')
    expect(normalizeBreakBefore('initial')).toBe('initial')
    expect(normalizeBreakBefore('revert')).toBe('revert')
    expect(normalizeBreakBefore('revert-layer')).toBe('revert-layer')
    expect(normalizeBreakBefore('unset')).toBe('unset')
  })
})
