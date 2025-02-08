import { describe, expect, test } from 'bun:test'
import { normalizeScrollbarWidth } from './scrollbar-width'

describe('normalizeScrollbarWidth', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeScrollbarWidth(null as any)).toBe('auto')
    expect(normalizeScrollbarWidth(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeScrollbarWidth('auto')).toBe('auto')
    expect(normalizeScrollbarWidth('thin')).toBe('thin')
    expect(normalizeScrollbarWidth('none')).toBe('none')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeScrollbarWidth('inherit')).toBe('inherit')
    expect(normalizeScrollbarWidth('initial')).toBe('initial')
    expect(normalizeScrollbarWidth('revert')).toBe('revert')
    expect(normalizeScrollbarWidth('revert-layer')).toBe('revert-layer')
    expect(normalizeScrollbarWidth('unset')).toBe('unset')
  })
})
