import { describe, expect, test } from 'bun:test'
import { normalizeFontVariantPosition } from './font-variant-position'

describe('normalizeFontVariantPosition', () => {
  test('should return "normal" for null or undefined', () => {
    // biome-ignore lint: lint/suspicious/noExplicitAny
    expect(normalizeFontVariantPosition(null as any)).toBe('normal')
    // biome-ignore lint: lint/suspicious/noExplicitAny
    expect(normalizeFontVariantPosition(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontVariantPosition('normal')).toBe('normal')
    expect(normalizeFontVariantPosition('sub')).toBe('sub')
    expect(normalizeFontVariantPosition('super')).toBe('super')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontVariantPosition('inherit')).toBe('inherit')
    expect(normalizeFontVariantPosition('initial')).toBe('initial')
    expect(normalizeFontVariantPosition('revert')).toBe('revert')
    expect(normalizeFontVariantPosition('revert-layer')).toBe('revert-layer')
    expect(normalizeFontVariantPosition('unset')).toBe('unset')
  })
})
