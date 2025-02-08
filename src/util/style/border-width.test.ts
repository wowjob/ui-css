import { describe, expect, test } from 'bun:test'
import { normalizeBorderWidth } from './border-width'

describe('normalizeBorderWidth', () => {
  // Single values
  test('should normalize single values', () => {
    expect(normalizeBorderWidth(16)).toBe('1rem')
    expect(normalizeBorderWidth('8px')).toBe('0.5rem')
    expect(normalizeBorderWidth('inherit')).toBe('inherit')
  })

  // Arrays
  test('should normalize arrays', () => {
    expect(normalizeBorderWidth([16])).toBe('1rem')
    expect(normalizeBorderWidth([16, 32])).toBe('1rem 2rem')
    expect(normalizeBorderWidth([16, 32, 48])).toBe('1rem 2rem 3rem')
    expect(normalizeBorderWidth([16, 32, 48, 64])).toBe('1rem 2rem 3rem 4rem')
  })

  // Mixed values
  test('should handle mixed units', () => {
    expect(normalizeBorderWidth(['8px', 'auto', '16px'])).toBe(
      '0.5rem auto 1rem',
    )
  })

  // Special cases
  test('should handle empty or invalid inputs', () => {
    expect(normalizeBorderWidth([])).toBe('0')
    expect(normalizeBorderWidth(null as any)).toBe('0')
    expect(normalizeBorderWidth(undefined as any)).toBe('0')
  })
})
