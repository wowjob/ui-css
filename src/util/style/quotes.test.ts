import { describe, expect, test } from 'bun:test'
import { normalizeQuotes } from './quotes'

describe('normalizeQuotes', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeQuotes(null as any)).toBe('auto')
    expect(normalizeQuotes(undefined as any)).toBe('auto')
    expect(normalizeQuotes('auto')).toBe('auto')
  })

  test('should return "none" as-is', () => {
    expect(normalizeQuotes('none')).toBe('none')
  })

  test('should handle single level of quotation marks', () => {
    expect(normalizeQuotes('"«" "»"')).toBe('"«" "»"')
  })

  test('should handle two levels of quotation marks', () => {
    expect(normalizeQuotes('"«" "»" "‹" "›"')).toBe('"«" "»" "‹" "›"')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeQuotes('inherit')).toBe('inherit')
    expect(normalizeQuotes('initial')).toBe('initial')
    expect(normalizeQuotes('revert')).toBe('revert')
    expect(normalizeQuotes('revert-layer')).toBe('revert-layer')
    expect(normalizeQuotes('unset')).toBe('unset')
  })
})
