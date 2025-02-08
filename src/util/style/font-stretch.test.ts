import { describe, expect, test } from 'bun:test'
import { normalizeFontStretch } from './font-stretch'

describe('normalizeFontStretch', () => {
  test('should return "normal" for null or undefined', () => {
    // biome-ignore lint: lint/suspicious/noExplicitAny
    expect(normalizeFontStretch(null as any)).toBe('normal')
    // biome-ignore lint: lint/suspicious/noExplicitAny
    expect(normalizeFontStretch(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontStretch('normal')).toBe('normal')
    expect(normalizeFontStretch('ultra-condensed')).toBe('ultra-condensed')
    expect(normalizeFontStretch('extra-condensed')).toBe('extra-condensed')
    expect(normalizeFontStretch('condensed')).toBe('condensed')
    expect(normalizeFontStretch('semi-condensed')).toBe('semi-condensed')
    expect(normalizeFontStretch('semi-expanded')).toBe('semi-expanded')
    expect(normalizeFontStretch('expanded')).toBe('expanded')
    expect(normalizeFontStretch('extra-expanded')).toBe('extra-expanded')
    expect(normalizeFontStretch('ultra-expanded')).toBe('ultra-expanded')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeFontStretch('50%')).toBe('50%')
    expect(normalizeFontStretch('100%')).toBe('100%')
    expect(normalizeFontStretch('200%')).toBe('200%')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeFontStretch('inherit')).toBe('inherit')
    expect(normalizeFontStretch('initial')).toBe('initial')
    expect(normalizeFontStretch('revert')).toBe('revert')
    expect(normalizeFontStretch('revert-layer')).toBe('revert-layer')
    expect(normalizeFontStretch('unset')).toBe('unset')
  })
})
