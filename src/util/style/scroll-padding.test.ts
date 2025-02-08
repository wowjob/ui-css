import { describe, expect, test } from 'bun:test'
import { normalizeScrollPadding } from './scroll-padding'

describe('normalizeScrollPadding', () => {
  test('should return string value as-is', () => {
    expect(normalizeScrollPadding('2rem')).toBe('2rem')
  })

  test('should normalize numeric value to rem', () => {
    expect(normalizeScrollPadding(32)).toBe('2rem')
  })

  test('should normalize array values', () => {
    expect(normalizeScrollPadding([16, 32])).toBe('1rem 2rem')
    expect(normalizeScrollPadding([16, 32, 48, 64])).toBe('1rem 2rem 3rem 4rem')
  })

  test('should normalize object values', () => {
    expect(normalizeScrollPadding({ top: 16, right: 32 })).toBe('1rem 2rem 0 0')
    expect(
      normalizeScrollPadding({ top: 16, right: 32, bottom: 48, left: 64 })
    ).toBe('1rem 2rem 3rem 4rem')
  })

  test('should handle empty or invalid inputs gracefully', () => {
    expect(normalizeScrollPadding({})).toBe('0')
    expect(normalizeScrollPadding(undefined as any)).toBe('0')
    expect(normalizeScrollPadding(null as any)).toBe('0')
  })
})
