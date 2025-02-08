import { describe, expect, test } from 'bun:test'
import { normalizeObjectPosition } from './object-position'

describe('normalizeObjectPosition', () => {
  test('should return "center" for null, undefined, or "center"', () => {
    expect(normalizeObjectPosition(null as any)).toBe('center')
    expect(normalizeObjectPosition(undefined as any)).toBe('center')
    expect(normalizeObjectPosition('center')).toBe('center')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeObjectPosition('top')).toBe('top')
    expect(normalizeObjectPosition('bottom')).toBe('bottom')
    expect(normalizeObjectPosition('left')).toBe('left')
    expect(normalizeObjectPosition('right')).toBe('right')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeObjectPosition('25% 75%')).toBe('25% 75%')
  })

  test('should handle length values as-is', () => {
    expect(normalizeObjectPosition('0 0')).toBe('0 0')
    expect(normalizeObjectPosition('1cm 2cm')).toBe('1cm 2cm')
    expect(normalizeObjectPosition('10ch 8em')).toBe('10ch 8em')
  })

  test('should handle edge offset values as-is', () => {
    expect(normalizeObjectPosition('bottom 10px right 20px')).toBe(
      'bottom 10px right 20px'
    )
    expect(normalizeObjectPosition('right 3em bottom 10px')).toBe(
      'right 3em bottom 10px'
    )
    expect(normalizeObjectPosition('top 0 right 10px')).toBe('top 0 right 10px')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeObjectPosition('inherit')).toBe('inherit')
    expect(normalizeObjectPosition('initial')).toBe('initial')
    expect(normalizeObjectPosition('revert')).toBe('revert')
    expect(normalizeObjectPosition('revert-layer')).toBe('revert-layer')
    expect(normalizeObjectPosition('unset')).toBe('unset')
  })
})
