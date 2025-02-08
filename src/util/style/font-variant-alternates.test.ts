import { describe, expect, test } from 'bun:test'
import { normalizeFontVariantAlternates } from './font-variant-alternates'

describe('normalizeFontVariantAlternates', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeFontVariantAlternates(null as any)).toBe('normal')
    expect(normalizeFontVariantAlternates(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontVariantAlternates('normal')).toBe('normal')
    expect(normalizeFontVariantAlternates('historical-forms')).toBe(
      'historical-forms'
    )
  })

  test('should return functional notation values as-is', () => {
    expect(
      normalizeFontVariantAlternates('stylistic(user-defined-ident)')
    ).toBe('stylistic(user-defined-ident)')
    expect(normalizeFontVariantAlternates('styleset(user-defined-ident)')).toBe(
      'styleset(user-defined-ident)'
    )
    expect(
      normalizeFontVariantAlternates('character-variant(user-defined-ident)')
    ).toBe('character-variant(user-defined-ident)')
    expect(normalizeFontVariantAlternates('swash(user-defined-ident)')).toBe(
      'swash(user-defined-ident)'
    )
    expect(
      normalizeFontVariantAlternates('ornaments(user-defined-ident)')
    ).toBe('ornaments(user-defined-ident)')
    expect(
      normalizeFontVariantAlternates('annotation(user-defined-ident)')
    ).toBe('annotation(user-defined-ident)')
    expect(
      normalizeFontVariantAlternates('swash(ident1) annotation(ident2)')
    ).toBe('swash(ident1) annotation(ident2)')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontVariantAlternates('inherit')).toBe('inherit')
    expect(normalizeFontVariantAlternates('initial')).toBe('initial')
    expect(normalizeFontVariantAlternates('revert')).toBe('revert')
    expect(normalizeFontVariantAlternates('revert-layer')).toBe('revert-layer')
    expect(normalizeFontVariantAlternates('unset')).toBe('unset')
  })
})
