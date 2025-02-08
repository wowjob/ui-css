import { describe, expect, test } from 'bun:test'
import { normalizeZIndex } from './z-index'

describe('normalizeZIndex', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeZIndex(null as any)).toBe('auto')
    expect(normalizeZIndex(undefined as any)).toBe('auto')
    expect(normalizeZIndex('auto')).toBe('auto')
  })

  test('should return integer values as strings', () => {
    expect(normalizeZIndex(0)).toBe('0')
    expect(normalizeZIndex(3)).toBe('3')
    expect(normalizeZIndex(289)).toBe('289')
    expect(normalizeZIndex(-1)).toBe('-1')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeZIndex('inherit')).toBe('inherit')
    expect(normalizeZIndex('initial')).toBe('initial')
    expect(normalizeZIndex('revert')).toBe('revert')
    expect(normalizeZIndex('revert-layer')).toBe('revert-layer')
    expect(normalizeZIndex('unset')).toBe('unset')
  })
})
