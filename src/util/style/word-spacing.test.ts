import { describe, expect, test } from 'bun:test'
import { normalizeWordSpacing } from './word-spacing'

describe('normalizeWordSpacing', () => {
  test('should return "normal" for null, undefined, or "normal"', () => {
    expect(normalizeWordSpacing(null as any)).toBe('normal')
    expect(normalizeWordSpacing(undefined as any)).toBe('normal')
    expect(normalizeWordSpacing('normal')).toBe('normal')
  })

  test('should convert px values to rem', () => {
    expect(normalizeWordSpacing('3px')).toBe('0.1875rem') // Assuming 16px base font size
    expect(normalizeWordSpacing(32)).toBe('2rem')
  })

  test('should handle length values as-is', () => {
    expect(normalizeWordSpacing('0.3em')).toBe('0.3em')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeWordSpacing('inherit')).toBe('inherit')
    expect(normalizeWordSpacing('initial')).toBe('initial')
    expect(normalizeWordSpacing('revert')).toBe('revert')
    expect(normalizeWordSpacing('revert-layer')).toBe('revert-layer')
    expect(normalizeWordSpacing('unset')).toBe('unset')
  })
})
