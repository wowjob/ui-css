import { describe, expect, test } from 'bun:test'
import { normalizeFontVariantCaps } from './font-variant-caps'

describe('normalizeFontVariantCaps', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeFontVariantCaps(null as any)).toBe('normal')
    expect(normalizeFontVariantCaps(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontVariantCaps('normal')).toBe('normal')
    expect(normalizeFontVariantCaps('small-caps')).toBe('small-caps')
    expect(normalizeFontVariantCaps('all-small-caps')).toBe('all-small-caps')
    expect(normalizeFontVariantCaps('petite-caps')).toBe('petite-caps')
    expect(normalizeFontVariantCaps('all-petite-caps')).toBe('all-petite-caps')
    expect(normalizeFontVariantCaps('unicase')).toBe('unicase')
    expect(normalizeFontVariantCaps('titling-caps')).toBe('titling-caps')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontVariantCaps('inherit')).toBe('inherit')
    expect(normalizeFontVariantCaps('initial')).toBe('initial')
    expect(normalizeFontVariantCaps('revert')).toBe('revert')
    expect(normalizeFontVariantCaps('revert-layer')).toBe('revert-layer')
    expect(normalizeFontVariantCaps('unset')).toBe('unset')
  })
})
