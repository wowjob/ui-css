import { describe, expect, test } from 'bun:test'
import { normalizeAccentColor } from './accent-color'

describe('normalizeAccentColor', () => {
  test('should return "auto" for the auto keyword', () => {
    expect(normalizeAccentColor('auto')).toBe('auto')
  })

  test('should return valid <color> values as-is', () => {
    expect(normalizeAccentColor('darkred')).toBe('darkred')
    expect(normalizeAccentColor('#5729e9')).toBe('#5729e9')
    expect(normalizeAccentColor('rgb(0 200 0)')).toBe('rgb(0 200 0)')
    expect(normalizeAccentColor('hsl(228 4% 24%)')).toBe('hsl(228 4% 24%)')
  })

  test('should return "auto" for null or undefined', () => {
    expect(normalizeAccentColor(undefined as any)).toBe('auto')
    expect(normalizeAccentColor(null as any)).toBe('auto')
  })

  test('should return global keywords as-is', () => {
    expect(normalizeAccentColor('inherit')).toBe('inherit')
    expect(normalizeAccentColor('initial')).toBe('initial')
    expect(normalizeAccentColor('revert')).toBe('revert')
    expect(normalizeAccentColor('revert-layer')).toBe('revert-layer')
    expect(normalizeAccentColor('unset')).toBe('unset')
  })
})
