import { describe, expect, test } from 'bun:test'
import { normalizeFontFeatureSettings } from './font-feature-settings'

describe('normalizeFontFeatureSettings', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeFontFeatureSettings(null as any)).toBe('normal')
    expect(normalizeFontFeatureSettings(undefined as any)).toBe('normal')
  })

  test('should return valid feature tag settings as-is', () => {
    expect(normalizeFontFeatureSettings('"smcp"')).toBe('"smcp"')
    expect(normalizeFontFeatureSettings('"smcp" on')).toBe('"smcp" on')
    expect(normalizeFontFeatureSettings('"swsh" 2')).toBe('"swsh" 2')
    expect(normalizeFontFeatureSettings('"smcp", "swsh" 2')).toBe(
      '"smcp", "swsh" 2'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontFeatureSettings('inherit')).toBe('inherit')
    expect(normalizeFontFeatureSettings('initial')).toBe('initial')
    expect(normalizeFontFeatureSettings('revert')).toBe('revert')
    expect(normalizeFontFeatureSettings('revert-layer')).toBe('revert-layer')
    expect(normalizeFontFeatureSettings('unset')).toBe('unset')
  })
})
