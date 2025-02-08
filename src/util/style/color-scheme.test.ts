import { describe, expect, test } from 'bun:test'
import { normalizeColorScheme } from './color-scheme'

describe('normalizeColorScheme', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeColorScheme(null as any)).toBe('normal')
    expect(normalizeColorScheme(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeColorScheme('normal')).toBe('normal')
    expect(normalizeColorScheme('light')).toBe('light')
    expect(normalizeColorScheme('dark')).toBe('dark')
    expect(normalizeColorScheme('light dark')).toBe('light dark')
    expect(normalizeColorScheme('only light')).toBe('only light')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeColorScheme('inherit')).toBe('inherit')
    expect(normalizeColorScheme('initial')).toBe('initial')
    expect(normalizeColorScheme('revert')).toBe('revert')
    expect(normalizeColorScheme('revert-layer')).toBe('revert-layer')
    expect(normalizeColorScheme('unset')).toBe('unset')
  })
})
