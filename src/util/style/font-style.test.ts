import { describe, expect, test } from 'bun:test'
import { normalizeFontStyle } from './font-style'

describe('normalizeFontStyle', () => {
  test('should return "normal" for null or undefined', () => {
    // biome-ignore lint: lint/suspicious/noExplicitAny
    expect(normalizeFontStyle(null as any)).toBe('normal')
    // biome-ignore lint: lint/suspicious/noExplicitAny
    expect(normalizeFontStyle(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontStyle('normal')).toBe('normal')
    expect(normalizeFontStyle('italic')).toBe('italic')
    expect(normalizeFontStyle('oblique')).toBe('oblique')
  })

  test('should return oblique with angle as-is', () => {
    expect(normalizeFontStyle('oblique 10deg')).toBe('oblique 10deg')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeFontStyle('inherit')).toBe('inherit')
    expect(normalizeFontStyle('initial')).toBe('initial')
    expect(normalizeFontStyle('revert')).toBe('revert')
    expect(normalizeFontStyle('revert-layer')).toBe('revert-layer')
    expect(normalizeFontStyle('unset')).toBe('unset')
  })
})
