import { describe, expect, test } from 'bun:test'
import { normalizePerspectiveOrigin } from './perspective-origin'

describe('normalizePerspectiveOrigin', () => {
  test('should return "center" for null, undefined, or "center"', () => {
    expect(normalizePerspectiveOrigin(null as any)).toBe('center')
    expect(normalizePerspectiveOrigin(undefined as any)).toBe('center')
    expect(normalizePerspectiveOrigin('center')).toBe('center')
  })

  test('should return single keyword values as-is', () => {
    expect(normalizePerspectiveOrigin('top')).toBe('top')
    expect(normalizePerspectiveOrigin('bottom')).toBe('bottom')
    expect(normalizePerspectiveOrigin('left')).toBe('left')
    expect(normalizePerspectiveOrigin('right')).toBe('right')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizePerspectiveOrigin('25%')).toBe('25%')
  })

  test('should handle length values as-is', () => {
    expect(normalizePerspectiveOrigin('10px')).toBe('10px')
    expect(normalizePerspectiveOrigin('3.5em')).toBe('3.5em')
  })

  test('should handle two-value syntax', () => {
    expect(normalizePerspectiveOrigin('top left')).toBe('top left')
    expect(normalizePerspectiveOrigin('bottom 25%')).toBe('bottom 25%')
    expect(normalizePerspectiveOrigin('10% right')).toBe('10% right')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizePerspectiveOrigin('inherit')).toBe('inherit')
    expect(normalizePerspectiveOrigin('initial')).toBe('initial')
    expect(normalizePerspectiveOrigin('revert')).toBe('revert')
    expect(normalizePerspectiveOrigin('revert-layer')).toBe('revert-layer')
    expect(normalizePerspectiveOrigin('unset')).toBe('unset')
  })
})
