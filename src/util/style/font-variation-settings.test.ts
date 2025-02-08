import { describe, expect, test } from 'bun:test'
import { normalizeFontVariationSettings } from './font-variation-settings'

describe('normalizeFontVariationSettings', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeFontVariationSettings(null as any)).toBe('normal')
    expect(normalizeFontVariationSettings(undefined as any)).toBe('normal')
  })

  test('should return valid variable font axis settings as-is', () => {
    expect(normalizeFontVariationSettings('"xhgt" 0.7')).toBe('"xhgt" 0.7')
    expect(normalizeFontVariationSettings('"wght" 1.0')).toBe('"wght" 1.0')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontVariationSettings('inherit')).toBe('inherit')
    expect(normalizeFontVariationSettings('initial')).toBe('initial')
    expect(normalizeFontVariationSettings('revert')).toBe('revert')
    expect(normalizeFontVariationSettings('revert-layer')).toBe('revert-layer')
    expect(normalizeFontVariationSettings('unset')).toBe('unset')
  })
})
