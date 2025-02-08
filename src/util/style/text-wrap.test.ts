import { describe, expect, test } from 'bun:test'
import { normalizeTextWrap } from './text-wrap'

describe('normalizeTextWrap', () => {
  test('should return "wrap" for null or undefined', () => {
    expect(normalizeTextWrap(null as any)).toBe('wrap')
    expect(normalizeTextWrap(undefined as any)).toBe('wrap')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTextWrap('wrap')).toBe('wrap')
    expect(normalizeTextWrap('nowrap')).toBe('nowrap')
    expect(normalizeTextWrap('balance')).toBe('balance')
    expect(normalizeTextWrap('pretty')).toBe('pretty')
    expect(normalizeTextWrap('stable')).toBe('stable')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextWrap('inherit')).toBe('inherit')
    expect(normalizeTextWrap('initial')).toBe('initial')
    expect(normalizeTextWrap('revert')).toBe('revert')
    expect(normalizeTextWrap('revert-layer')).toBe('revert-layer')
    expect(normalizeTextWrap('unset')).toBe('unset')
  })
})
