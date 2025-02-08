import { describe, expect, test } from 'bun:test'
import { normalizeTextWrapStyle } from './text-wrap-style'

describe('normalizeTextWrapStyle', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeTextWrapStyle(null as any)).toBe('auto')
    expect(normalizeTextWrapStyle(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTextWrapStyle('auto')).toBe('auto')
    expect(normalizeTextWrapStyle('balance')).toBe('balance')
    expect(normalizeTextWrapStyle('pretty')).toBe('pretty')
    expect(normalizeTextWrapStyle('stable')).toBe('stable')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextWrapStyle('inherit')).toBe('inherit')
    expect(normalizeTextWrapStyle('initial')).toBe('initial')
    expect(normalizeTextWrapStyle('revert')).toBe('revert')
    expect(normalizeTextWrapStyle('revert-layer')).toBe('revert-layer')
    expect(normalizeTextWrapStyle('unset')).toBe('unset')
  })
})
