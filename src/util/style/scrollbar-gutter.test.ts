import { describe, expect, test } from 'bun:test'
import { normalizeScrollbarGutter } from './scrollbar-gutter'

describe('normalizeScrollbarGutter', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeScrollbarGutter(null as any)).toBe('auto')
    expect(normalizeScrollbarGutter(undefined as any)).toBe('auto')
  })

  test('should return valid single keyword value as-is', () => {
    expect(normalizeScrollbarGutter('auto')).toBe('auto')
    expect(normalizeScrollbarGutter('stable')).toBe('stable')
  })

  test('should return valid combined keyword values as-is', () => {
    expect(normalizeScrollbarGutter('stable both-edges')).toBe(
      'stable both-edges'
    )
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeScrollbarGutter('inherit')).toBe('inherit')
    expect(normalizeScrollbarGutter('initial')).toBe('initial')
    expect(normalizeScrollbarGutter('revert')).toBe('revert')
    expect(normalizeScrollbarGutter('revert-layer')).toBe('revert-layer')
    expect(normalizeScrollbarGutter('unset')).toBe('unset')
  })
})
