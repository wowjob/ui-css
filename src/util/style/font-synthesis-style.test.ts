import { describe, expect, test } from 'bun:test'
import { normalizeFontSynthesisStyle } from './font-synthesis-style'

describe('normalizeFontSynthesisStyle', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeFontSynthesisStyle(null as any)).toBe('auto')
    expect(normalizeFontSynthesisStyle(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontSynthesisStyle('auto')).toBe('auto')
    expect(normalizeFontSynthesisStyle('none')).toBe('none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontSynthesisStyle('inherit')).toBe('inherit')
    expect(normalizeFontSynthesisStyle('initial')).toBe('initial')
    expect(normalizeFontSynthesisStyle('revert')).toBe('revert')
    expect(normalizeFontSynthesisStyle('revert-layer')).toBe('revert-layer')
    expect(normalizeFontSynthesisStyle('unset')).toBe('unset')
  })
})
