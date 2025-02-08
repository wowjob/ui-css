import { describe, expect, test } from 'bun:test'
import { normalizeBreakAfter } from './break-after'

describe('normalizeBreakAfter', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeBreakAfter(null as any)).toBe('auto')
    expect(normalizeBreakAfter(undefined as any)).toBe('auto')
  })

  test('should return generic break values as-is', () => {
    expect(normalizeBreakAfter('auto')).toBe('auto')
    expect(normalizeBreakAfter('avoid')).toBe('avoid')
    expect(normalizeBreakAfter('always')).toBe('always')
    expect(normalizeBreakAfter('all')).toBe('all')
  })

  test('should return page break values as-is', () => {
    expect(normalizeBreakAfter('avoid-page')).toBe('avoid-page')
    expect(normalizeBreakAfter('page')).toBe('page')
    expect(normalizeBreakAfter('left')).toBe('left')
    expect(normalizeBreakAfter('right')).toBe('right')
    expect(normalizeBreakAfter('recto')).toBe('recto')
    expect(normalizeBreakAfter('verso')).toBe('verso')
  })

  test('should return column break values as-is', () => {
    expect(normalizeBreakAfter('avoid-column')).toBe('avoid-column')
    expect(normalizeBreakAfter('column')).toBe('column')
  })

  test('should return region break values as-is', () => {
    expect(normalizeBreakAfter('avoid-region')).toBe('avoid-region')
    expect(normalizeBreakAfter('region')).toBe('region')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeBreakAfter('inherit')).toBe('inherit')
    expect(normalizeBreakAfter('initial')).toBe('initial')
    expect(normalizeBreakAfter('revert')).toBe('revert')
    expect(normalizeBreakAfter('revert-layer')).toBe('revert-layer')
    expect(normalizeBreakAfter('unset')).toBe('unset')
  })
})
