import { describe, expect, test } from 'bun:test'
import { normalizeFontVariantNumeric } from './font-variant-numeric'

describe('normalizeFontVariantNumeric', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeFontVariantNumeric(null as any)).toBe('normal')
    expect(normalizeFontVariantNumeric(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontVariantNumeric('normal')).toBe('normal')
    expect(normalizeFontVariantNumeric('ordinal')).toBe('ordinal')
    expect(normalizeFontVariantNumeric('slashed-zero')).toBe('slashed-zero')
    expect(normalizeFontVariantNumeric('lining-nums')).toBe('lining-nums')
    expect(normalizeFontVariantNumeric('tabular-nums')).toBe('tabular-nums')
    expect(normalizeFontVariantNumeric('diagonal-fractions')).toBe(
      'diagonal-fractions'
    )
  })

  test('should return combinations of values as-is', () => {
    expect(normalizeFontVariantNumeric('oldstyle-nums stacked-fractions')).toBe(
      'oldstyle-nums stacked-fractions'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontVariantNumeric('inherit')).toBe('inherit')
    expect(normalizeFontVariantNumeric('initial')).toBe('initial')
    expect(normalizeFontVariantNumeric('revert')).toBe('revert')
    expect(normalizeFontVariantNumeric('revert-layer')).toBe('revert-layer')
    expect(normalizeFontVariantNumeric('unset')).toBe('unset')
  })
})
