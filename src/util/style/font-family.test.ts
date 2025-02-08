import { describe, expect, test } from 'bun:test'
import { normalizeFontFamily } from './font-family'

describe('normalizeFontFamily', () => {
  test('should return "inherit" for null or undefined', () => {
    expect(normalizeFontFamily(null as any)).toBe('inherit')
    expect(normalizeFontFamily(undefined as any)).toBe('inherit')
  })

  test('should return valid font family names as-is', () => {
    expect(normalizeFontFamily('"Gill Sans Extrabold", sans-serif')).toBe(
      '"Gill Sans Extrabold", sans-serif'
    )
    expect(normalizeFontFamily('"Goudy Bookletter 1911", sans-serif')).toBe(
      '"Goudy Bookletter 1911", sans-serif'
    )
  })

  test('should return generic family names as-is', () => {
    expect(normalizeFontFamily('serif')).toBe('serif')
    expect(normalizeFontFamily('sans-serif')).toBe('sans-serif')
    expect(normalizeFontFamily('monospace')).toBe('monospace')
    expect(normalizeFontFamily('cursive')).toBe('cursive')
    expect(normalizeFontFamily('fantasy')).toBe('fantasy')
    expect(normalizeFontFamily('system-ui')).toBe('system-ui')
    expect(normalizeFontFamily('ui-serif')).toBe('ui-serif')
    expect(normalizeFontFamily('ui-sans-serif')).toBe('ui-sans-serif')
    expect(normalizeFontFamily('ui-monospace')).toBe('ui-monospace')
    expect(normalizeFontFamily('ui-rounded')).toBe('ui-rounded')
    expect(normalizeFontFamily('emoji')).toBe('emoji')
    expect(normalizeFontFamily('math')).toBe('math')
    expect(normalizeFontFamily('fangsong')).toBe('fangsong')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeFontFamily('inherit')).toBe('inherit')
    expect(normalizeFontFamily('initial')).toBe('initial')
    expect(normalizeFontFamily('revert')).toBe('revert')
    expect(normalizeFontFamily('revert-layer')).toBe('revert-layer')
    expect(normalizeFontFamily('unset')).toBe('unset')
  })
})
