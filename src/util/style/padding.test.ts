import { describe, expect, test } from 'bun:test'
import { normalizePadding } from './padding'

describe('normalizePadding', () => {
  // Test special CSS values
  test('should return special CSS values as-is', () => {
    expect(normalizePadding('inherit')).toBe('inherit')
    expect(normalizePadding('initial')).toBe('initial')
    expect(normalizePadding('revert')).toBe('revert')
    expect(normalizePadding('revert-layer')).toBe('revert-layer')
    expect(normalizePadding('unset')).toBe('unset')
  })

  // Test string inputs
  test('should return the string value as-is when passed a string', () => {
    expect(normalizePadding('12px')).toBe('0.75rem')
    expect(normalizePadding('1rem')).toBe('1rem')
    expect(normalizePadding('0')).toBe('0')
  })

  // Test single number input
  test('should convert a single numeric value to rem', () => {
    expect(normalizePadding(16)).toBe('1rem')
    expect(normalizePadding(0)).toBe('0')
    expect(normalizePadding(32)).toBe('2rem')
  })

  // Test array inputs
  test('should normalize an array and convert numbers to rem', () => {
    expect(normalizePadding([16])).toBe('1rem')
    expect(normalizePadding([16, 32])).toBe('1rem 2rem')
    expect(normalizePadding([16, 32, 48])).toBe('1rem 2rem 3rem')
    expect(normalizePadding([16, 32, 48, 64])).toBe('1rem 2rem 3rem 4rem')
    expect(normalizePadding(['10px', 16, '1rem', 32])).toBe(
      '0.625rem 1rem 1rem 2rem',
    )
  })

  // Test object inputs
  test('should normalize an object and convert values to rem', () => {
    expect(normalizePadding({ top: 16 })).toBe('1rem 0 0')
    expect(normalizePadding({ top: 16, right: 32 })).toBe('1rem 2rem 0 0')
    expect(normalizePadding({ top: 16, right: 32, bottom: 48 })).toBe(
      '1rem 2rem 3rem 0',
    )
    expect(
      normalizePadding({ top: '10px', right: 16, bottom: '1rem', left: 32 }),
    ).toBe('0.625rem 1rem 1rem 2rem')
    expect(normalizePadding({})).toBe('0')
  })

  // Test mixed inputs
  test('should handle mixed units correctly', () => {
    expect(normalizePadding([16, 'revert', 48, 'inherit'])).toBe(
      '1rem revert 3rem inherit',
    )
    expect(
      normalizePadding({
        top: 'inherit',
        right: 'revert-layer',
        bottom: 48,
        left: '10px',
      }),
    ).toBe('inherit revert-layer 3rem 0.625rem')
  })

  // Test edge cases for special CSS values
  test('should handle special CSS values with arrays and objects', () => {
    expect(normalizePadding(['inherit', 'initial', 'unset', 'revert'])).toBe(
      'inherit initial unset revert',
    )
    expect(
      normalizePadding({
        top: 'revert',
        right: 'revert-layer',
        bottom: 'unset',
        left: 'initial',
      }),
    ).toBe('revert revert-layer unset initial')
  })

  // Test empty and invalid inputs
  test('should handle empty or invalid inputs', () => {
    expect(normalizePadding([])).toBe('0')
    expect(normalizePadding({})).toBe('0')
    expect(normalizePadding(null as any)).toBe('0')
    expect(normalizePadding(false as any)).toBe('0')
    expect(normalizePadding(true as any)).toBe('0')
    expect(normalizePadding(undefined as any)).toBe('0')
  })

  // Test shorthand normalization edge cases
  test('should correctly normalize shorthand scenarios', () => {
    expect(normalizePadding([16, 16, 16, 16])).toBe('1rem')
    expect(normalizePadding([16, 32, 16, 32])).toBe('1rem 2rem')
    expect(normalizePadding([16, 32, 48, 32])).toBe('1rem 2rem 3rem')
    expect(normalizePadding([16, 32, 48, 64])).toBe('1rem 2rem 3rem 4rem')
  })
})
