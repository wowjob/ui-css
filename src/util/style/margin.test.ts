import { describe, expect, test } from 'bun:test'
import { normalizeMargin } from './margin'

describe('normalizeMargin', () => {
  // Test special CSS values
  test('should return special CSS values as-is', () => {
    expect(normalizeMargin('inherit')).toBe('inherit')
    expect(normalizeMargin('initial')).toBe('initial')
    expect(normalizeMargin('revert')).toBe('revert')
    expect(normalizeMargin('revert-layer')).toBe('revert-layer')
    expect(normalizeMargin('unset')).toBe('unset')
    expect(normalizeMargin('auto')).toBe('auto')
  })

  // Test string inputs
  test('should return the string value as-is when passed a string', () => {
    expect(normalizeMargin('12px')).toBe('0.75rem')
    expect(normalizeMargin('1rem')).toBe('1rem')
    expect(normalizeMargin('0')).toBe('0')
  })

  // Test single number input
  test('should convert a single numeric value to rem', () => {
    expect(normalizeMargin(16)).toBe('1rem')
    expect(normalizeMargin(0)).toBe('0')
    expect(normalizeMargin(32)).toBe('2rem')
  })

  // Test array inputs
  test('should normalize an array and convert numbers to rem', () => {
    expect(normalizeMargin([16])).toBe('1rem')
    expect(normalizeMargin([16, 32])).toBe('1rem 2rem')
    expect(normalizeMargin([16, 32, 48])).toBe('1rem 2rem 3rem')
    expect(normalizeMargin([16, 32, 48, 64])).toBe('1rem 2rem 3rem 4rem')
    expect(normalizeMargin(['10px', 16, '1rem', 32])).toBe(
      '0.625rem 1rem 1rem 2rem',
    )
  })

  // Test object inputs
  test('should normalize an object and convert values to rem', () => {
    expect(normalizeMargin({ top: 16 })).toBe('1rem 0 0')
    expect(normalizeMargin({ top: 16, right: 32 })).toBe('1rem 2rem 0 0')
    expect(normalizeMargin({ top: 16, right: 32, bottom: 48 })).toBe(
      '1rem 2rem 3rem 0',
    )
    expect(
      normalizeMargin({ top: '10px', right: 16, bottom: '1rem', left: 32 }),
    ).toBe('0.625rem 1rem 1rem 2rem')
    expect(normalizeMargin({})).toBe('0')
  })

  // Test mixed inputs
  test('should handle mixed units correctly', () => {
    expect(normalizeMargin([16, 'auto', 48, 'inherit'])).toBe(
      '1rem auto 3rem inherit',
    )
    expect(
      normalizeMargin({
        top: 'inherit',
        right: 'auto',
        bottom: 48,
        left: '10px',
      }),
    ).toBe('inherit auto 3rem 0.625rem')
  })

  // Test edge cases for special CSS values
  test('should handle special CSS values with arrays and objects', () => {
    expect(normalizeMargin(['inherit', 'initial', 'unset', 'auto'])).toBe(
      'inherit initial unset auto',
    )
    expect(
      normalizeMargin({
        top: 'revert',
        right: 'revert-layer',
        bottom: 'unset',
        left: 'initial',
      }),
    ).toBe('revert revert-layer unset initial')
  })

  // Test empty and invalid inputs
  test('should handle empty or invalid inputs', () => {
    expect(normalizeMargin([])).toBe('0')
    expect(normalizeMargin({})).toBe('0')
  })

  // Test shorthand normalization edge cases
  test('should correctly normalize shorthand scenarios', () => {
    expect(normalizeMargin([16, 16, 16, 16])).toBe('1rem')
    expect(normalizeMargin([16, 32, 16, 32])).toBe('1rem 2rem')
    expect(normalizeMargin([16, 32, 48, 32])).toBe('1rem 2rem 3rem')
    expect(normalizeMargin([16, 32, 48, 64])).toBe('1rem 2rem 3rem 4rem')
  })
})
