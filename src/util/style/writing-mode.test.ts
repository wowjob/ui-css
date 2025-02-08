import { describe, expect, test } from 'bun:test'
import { normalizeWritingMode } from './writing-mode'

describe('normalizeWritingMode', () => {
  test('should return "horizontal-tb" for null or undefined', () => {
    expect(normalizeWritingMode(null as any)).toBe('horizontal-tb')
    expect(normalizeWritingMode(undefined as any)).toBe('horizontal-tb')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeWritingMode('horizontal-tb')).toBe('horizontal-tb')
    expect(normalizeWritingMode('vertical-rl')).toBe('vertical-rl')
    expect(normalizeWritingMode('vertical-lr')).toBe('vertical-lr')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeWritingMode('inherit')).toBe('inherit')
    expect(normalizeWritingMode('initial')).toBe('initial')
    expect(normalizeWritingMode('revert')).toBe('revert')
    expect(normalizeWritingMode('revert-layer')).toBe('revert-layer')
    expect(normalizeWritingMode('unset')).toBe('unset')
  })
})
