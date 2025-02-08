import { describe, expect, test } from 'bun:test'
import { normalizeFlexShrink } from './flex-shrink'

describe('normalizeFlexShrink', () => {
  test('should return valid flex-shrink values', () => {
    expect(normalizeFlexShrink(1)).toBe('1')
    expect(normalizeFlexShrink(0)).toBe('0')
    expect(normalizeFlexShrink('inherit')).toBe('inherit')
  })

  test('should handle invalid or missing values gracefully', () => {
    expect(normalizeFlexShrink(undefined as any)).toBe('1')
    expect(normalizeFlexShrink(null as any)).toBe('1')
  })
})
