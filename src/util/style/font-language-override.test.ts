import { describe, expect, test } from 'bun:test'
import { normalizeFontLanguageOverride } from './font-language-override'

describe('normalizeFontLanguageOverride', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeFontLanguageOverride(null as any)).toBe('normal')
    expect(normalizeFontLanguageOverride(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontLanguageOverride('normal')).toBe('normal')
  })

  test('should return valid <string> values as-is', () => {
    expect(normalizeFontLanguageOverride('"ENG"')).toBe('"ENG"')
    expect(normalizeFontLanguageOverride('"TRK"')).toBe('"TRK"')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontLanguageOverride('inherit')).toBe('inherit')
    expect(normalizeFontLanguageOverride('initial')).toBe('initial')
    expect(normalizeFontLanguageOverride('revert')).toBe('revert')
    expect(normalizeFontLanguageOverride('revert-layer')).toBe('revert-layer')
    expect(normalizeFontLanguageOverride('unset')).toBe('unset')
  })
})
