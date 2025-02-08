import { describe, expect, test } from 'bun:test'
import { normalizeFontVariantLigatures } from './font-variant-ligatures'

describe('normalizeFontVariantLigatures', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeFontVariantLigatures(null as any)).toBe('normal')
    expect(normalizeFontVariantLigatures(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontVariantLigatures('normal')).toBe('normal')
    expect(normalizeFontVariantLigatures('none')).toBe('none')
    expect(normalizeFontVariantLigatures('common-ligatures')).toBe(
      'common-ligatures'
    )
    expect(normalizeFontVariantLigatures('no-common-ligatures')).toBe(
      'no-common-ligatures'
    )
    expect(normalizeFontVariantLigatures('contextual')).toBe('contextual')
    expect(normalizeFontVariantLigatures('no-contextual')).toBe('no-contextual')
  })

  test('should return combinations of values as-is', () => {
    expect(
      normalizeFontVariantLigatures('no-contextual common-ligatures')
    ).toBe('no-contextual common-ligatures')
    expect(
      normalizeFontVariantLigatures(
        'common-ligatures no-discretionary-ligatures historical-ligatures contextual'
      )
    ).toBe(
      'common-ligatures no-discretionary-ligatures historical-ligatures contextual'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontVariantLigatures('inherit')).toBe('inherit')
    expect(normalizeFontVariantLigatures('initial')).toBe('initial')
    expect(normalizeFontVariantLigatures('revert')).toBe('revert')
    expect(normalizeFontVariantLigatures('revert-layer')).toBe('revert-layer')
    expect(normalizeFontVariantLigatures('unset')).toBe('unset')
  })
})
