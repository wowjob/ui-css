import { describe, expect, test } from 'bun:test'
import { normalizeFontSynthesisSmallCaps } from './font-synthesis-small-caps'

describe('normalizeFontSynthesisSmallCaps', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeFontSynthesisSmallCaps(null as any)).toBe('auto')
    expect(normalizeFontSynthesisSmallCaps(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontSynthesisSmallCaps('auto')).toBe('auto')
    expect(normalizeFontSynthesisSmallCaps('none')).toBe('none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontSynthesisSmallCaps('inherit')).toBe('inherit')
    expect(normalizeFontSynthesisSmallCaps('initial')).toBe('initial')
    expect(normalizeFontSynthesisSmallCaps('revert')).toBe('revert')
    expect(normalizeFontSynthesisSmallCaps('revert-layer')).toBe('revert-layer')
    expect(normalizeFontSynthesisSmallCaps('unset')).toBe('unset')
  })
})
