import { describe, expect, test } from 'bun:test'
import { normalizeOffsetAnchor } from './offset-anchor'

describe('normalizeOffsetAnchor', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeOffsetAnchor(null as any)).toBe('auto')
    expect(normalizeOffsetAnchor(undefined as any)).toBe('auto')
    expect(normalizeOffsetAnchor('auto')).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeOffsetAnchor('top')).toBe('top')
    expect(normalizeOffsetAnchor('bottom')).toBe('bottom')
    expect(normalizeOffsetAnchor('left')).toBe('left')
    expect(normalizeOffsetAnchor('right')).toBe('right')
    expect(normalizeOffsetAnchor('center')).toBe('center')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeOffsetAnchor('25% 75%')).toBe('25% 75%')
  })

  test('should handle length values as-is', () => {
    expect(normalizeOffsetAnchor('0 0')).toBe('0 0')
    expect(normalizeOffsetAnchor('1cm 2cm')).toBe('1cm 2cm')
    expect(normalizeOffsetAnchor('10ch 8em')).toBe('10ch 8em')
  })

  test('should handle edge offset values as-is', () => {
    expect(normalizeOffsetAnchor('bottom 10px right 20px')).toBe(
      'bottom 10px right 20px'
    )
    expect(normalizeOffsetAnchor('right 3em bottom 10px')).toBe(
      'right 3em bottom 10px'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeOffsetAnchor('inherit')).toBe('inherit')
    expect(normalizeOffsetAnchor('initial')).toBe('initial')
    expect(normalizeOffsetAnchor('revert')).toBe('revert')
    expect(normalizeOffsetAnchor('revert-layer')).toBe('revert-layer')
    expect(normalizeOffsetAnchor('unset')).toBe('unset')
  })
})
