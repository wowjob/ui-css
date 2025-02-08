import { describe, expect, test } from 'bun:test'
import { normalizeFlexBasis } from './flex-basis'

describe('normalizeFlexBasis', () => {
  test('should return valid flex-basis values', () => {
    expect(normalizeFlexBasis('auto')).toBe('auto')
    expect(normalizeFlexBasis('50%')).toBe('50%')
    expect(normalizeFlexBasis('inherit')).toBe('inherit')
  })

  test('should convert pixel values to rem', () => {
    expect(normalizeFlexBasis('16px')).toBe('1rem')
    expect(normalizeFlexBasis('32px')).toBe('2rem')
  })

  test('should handle invalid or missing values gracefully', () => {
    expect(normalizeFlexBasis(undefined as any)).toBe('auto')
    expect(normalizeFlexBasis(null as any)).toBe('auto')
  })
})
