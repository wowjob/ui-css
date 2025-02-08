import { describe, expect, test } from 'bun:test'
import { normalizeStrokeMiterlimit } from './stroke-miterlimit'

describe('normalizeStrokeMiterlimit', () => {
  test('should return "4" for null or undefined', () => {
    expect(normalizeStrokeMiterlimit(null as any)).toBe('4')
    expect(normalizeStrokeMiterlimit(undefined as any)).toBe('4')
  })

  test('should return number values as strings', () => {
    expect(normalizeStrokeMiterlimit(1)).toBe('1')
    // biome-ignore lint: biomelint/suspicious/noApproximativeNumericConstant
    expect(normalizeStrokeMiterlimit(3.1416)).toBe('3.1416')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeStrokeMiterlimit('inherit')).toBe('inherit')
    expect(normalizeStrokeMiterlimit('initial')).toBe('initial')
    expect(normalizeStrokeMiterlimit('revert')).toBe('revert')
    expect(normalizeStrokeMiterlimit('revert-layer')).toBe('revert-layer')
    expect(normalizeStrokeMiterlimit('unset')).toBe('unset')
  })
})
