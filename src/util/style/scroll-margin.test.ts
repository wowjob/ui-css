import { describe, expect, test } from 'bun:test'
import { normalizeScrollMargin } from './scroll-margin'

describe('normalizeScrollMargin', () => {
  test('should return string value as-is', () => {
    expect(normalizeScrollMargin('2rem')).toBe('2rem')
  })

  test('should normalize numeric value to rem', () => {
    expect(normalizeScrollMargin(32)).toBe('2rem')
  })

  test('should normalize array values', () => {
    expect(normalizeScrollMargin([16, 32])).toBe('1rem 2rem')
    expect(normalizeScrollMargin([16, 32, 48, 64])).toBe('1rem 2rem 3rem 4rem')
  })

  test('should normalize object values', () => {
    expect(normalizeScrollMargin({ top: 16, right: 32 })).toBe('1rem 2rem 0 0')
    expect(
      normalizeScrollMargin({ top: 16, right: 32, bottom: 48, left: 64 })
    ).toBe('1rem 2rem 3rem 4rem')
  })

  test('should handle empty or invalid inputs gracefully', () => {
    expect(normalizeScrollMargin({})).toBe('0')
    expect(normalizeScrollMargin(undefined as any)).toBe('0')
    expect(normalizeScrollMargin(null as any)).toBe('0')
  })
})
