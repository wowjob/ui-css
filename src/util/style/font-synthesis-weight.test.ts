import { describe, expect, test } from 'bun:test'
import { normalizeFontSynthesisWeight } from './font-synthesis-weight'

describe('normalizeFontSynthesisWeight', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeFontSynthesisWeight(null as any)).toBe('auto')
    expect(normalizeFontSynthesisWeight(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontSynthesisWeight('auto')).toBe('auto')
    expect(normalizeFontSynthesisWeight('none')).toBe('none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontSynthesisWeight('inherit')).toBe('inherit')
    expect(normalizeFontSynthesisWeight('initial')).toBe('initial')
    expect(normalizeFontSynthesisWeight('revert')).toBe('revert')
    expect(normalizeFontSynthesisWeight('revert-layer')).toBe('revert-layer')
    expect(normalizeFontSynthesisWeight('unset')).toBe('unset')
  })
})
