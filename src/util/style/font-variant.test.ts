import { describe, expect, test } from 'bun:test'
import { normalizeFontVariant } from './font-variant'

describe('normalizeFontVariant', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeFontVariant(null as any)).toBe('normal')
    expect(normalizeFontVariant(undefined as any)).toBe('normal')
  })

  test('should return "none" as-is', () => {
    expect(normalizeFontVariant('none')).toBe('none')
  })

  test('should handle ligature-related values', () => {
    expect(normalizeFontVariant('common-ligatures')).toBe('common-ligatures')
    expect(normalizeFontVariant('no-common-ligatures')).toBe(
      'no-common-ligatures'
    )
    expect(normalizeFontVariant('contextual')).toBe('contextual')
    expect(normalizeFontVariant('no-contextual')).toBe('no-contextual')
  })

  test('should handle caps-related values', () => {
    expect(normalizeFontVariant('small-caps')).toBe('small-caps')
    expect(normalizeFontVariant('all-small-caps')).toBe('all-small-caps')
    expect(normalizeFontVariant('petite-caps')).toBe('petite-caps')
    expect(normalizeFontVariant('all-petite-caps')).toBe('all-petite-caps')
    expect(normalizeFontVariant('unicase')).toBe('unicase')
    expect(normalizeFontVariant('titling-caps')).toBe('titling-caps')
  })

  test('should handle numeric-related values', () => {
    expect(normalizeFontVariant('lining-nums')).toBe('lining-nums')
    expect(normalizeFontVariant('oldstyle-nums')).toBe('oldstyle-nums')
    expect(normalizeFontVariant('proportional-nums')).toBe('proportional-nums')
    expect(normalizeFontVariant('tabular-nums')).toBe('tabular-nums')
    expect(normalizeFontVariant('diagonal-fractions')).toBe(
      'diagonal-fractions'
    )
    expect(normalizeFontVariant('stacked-fractions')).toBe('stacked-fractions')
    expect(normalizeFontVariant('ordinal')).toBe('ordinal')
    expect(normalizeFontVariant('slashed-zero')).toBe('slashed-zero')
  })

  test('should handle east-asian-related values', () => {
    expect(normalizeFontVariant('jis78')).toBe('jis78')
    expect(normalizeFontVariant('simplified')).toBe('simplified')
    expect(normalizeFontVariant('proportional-width')).toBe(
      'proportional-width'
    )
    expect(normalizeFontVariant('ruby')).toBe('ruby')
  })

  test('should handle position-related values', () => {
    expect(normalizeFontVariant('sub')).toBe('sub')
    expect(normalizeFontVariant('super')).toBe('super')
  })

  test('should handle emoji-related values', () => {
    expect(normalizeFontVariant('text')).toBe('text')
    expect(normalizeFontVariant('emoji')).toBe('emoji')
    expect(normalizeFontVariant('unicode')).toBe('unicode')
  })

  test('should handle combinations of values', () => {
    expect(normalizeFontVariant('common-ligatures small-caps')).toBe(
      'common-ligatures small-caps'
    )
    expect(normalizeFontVariant('proportional-nums sub')).toBe(
      'proportional-nums sub'
    )
    expect(
      normalizeFontVariant('lining-nums small-caps jis78 proportional-width')
    ).toBe('lining-nums small-caps jis78 proportional-width')
  })

  test('should handle functional values as-is', () => {
    expect(normalizeFontVariant('stylistic(1)')).toBe('stylistic(1)')
    expect(normalizeFontVariant('styleset(2,3)')).toBe('styleset(2,3)')
    expect(normalizeFontVariant('swash(ornament)')).toBe('swash(ornament)')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeFontVariant('inherit')).toBe('inherit')
    expect(normalizeFontVariant('initial')).toBe('initial')
    expect(normalizeFontVariant('revert')).toBe('revert')
    expect(normalizeFontVariant('revert-layer')).toBe('revert-layer')
    expect(normalizeFontVariant('unset')).toBe('unset')
  })
})
