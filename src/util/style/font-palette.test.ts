import { describe, expect, test } from 'bun:test'
import { normalizeFontPalette } from './font-palette'

describe('normalizeFontPalette', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeFontPalette(null as any)).toBe('normal')
    expect(normalizeFontPalette(undefined as any)).toBe('normal')
  })

  test('should return font-defined palette keyword as-is', () => {
    expect(normalizeFontPalette('normal')).toBe('normal')
  })

  test('should return user-defined palette as-is', () => {
    expect(normalizeFontPalette('--one')).toBe('--one')
  })

  test('should return palette-mix values as-is', () => {
    expect(normalizeFontPalette('palette-mix(in lch, --blue, --yellow)')).toBe(
      'palette-mix(in lch, --blue, --yellow)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontPalette('inherit')).toBe('inherit')
    expect(normalizeFontPalette('initial')).toBe('initial')
    expect(normalizeFontPalette('revert')).toBe('revert')
    expect(normalizeFontPalette('revert-layer')).toBe('revert-layer')
    expect(normalizeFontPalette('unset')).toBe('unset')
  })
})
