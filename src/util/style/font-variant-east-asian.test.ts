import { describe, expect, test } from 'bun:test'
import { normalizeFontVariantEastAsian } from './font-variant-east-asian'

describe('normalizeFontVariantEastAsian', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeFontVariantEastAsian(null as any)).toBe('normal')
    expect(normalizeFontVariantEastAsian(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontVariantEastAsian('normal')).toBe('normal')
    expect(normalizeFontVariantEastAsian('ruby')).toBe('ruby')
    expect(normalizeFontVariantEastAsian('jis78')).toBe('jis78')
    expect(normalizeFontVariantEastAsian('simplified')).toBe('simplified')
    expect(normalizeFontVariantEastAsian('full-width')).toBe('full-width')
    expect(normalizeFontVariantEastAsian('proportional-width')).toBe(
      'proportional-width'
    )
  })

  test('should return combinations of values as-is', () => {
    expect(normalizeFontVariantEastAsian('ruby full-width jis83')).toBe(
      'ruby full-width jis83'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontVariantEastAsian('inherit')).toBe('inherit')
    expect(normalizeFontVariantEastAsian('initial')).toBe('initial')
    expect(normalizeFontVariantEastAsian('revert')).toBe('revert')
    expect(normalizeFontVariantEastAsian('revert-layer')).toBe('revert-layer')
    expect(normalizeFontVariantEastAsian('unset')).toBe('unset')
  })
})
