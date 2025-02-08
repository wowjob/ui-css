import { describe, expect, test } from 'bun:test'
import { normalizeObjectFit } from './object-fit'

describe('normalizeObjectFit', () => {
  test('should return "fill" for null, undefined, or "fill"', () => {
    expect(normalizeObjectFit(null as any)).toBe('fill')
    expect(normalizeObjectFit(undefined as any)).toBe('fill')
    expect(normalizeObjectFit('fill')).toBe('fill')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeObjectFit('contain')).toBe('contain')
    expect(normalizeObjectFit('cover')).toBe('cover')
    expect(normalizeObjectFit('none')).toBe('none')
    expect(normalizeObjectFit('scale-down')).toBe('scale-down')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeObjectFit('inherit')).toBe('inherit')
    expect(normalizeObjectFit('initial')).toBe('initial')
    expect(normalizeObjectFit('revert')).toBe('revert')
    expect(normalizeObjectFit('revert-layer')).toBe('revert-layer')
    expect(normalizeObjectFit('unset')).toBe('unset')
  })
})
