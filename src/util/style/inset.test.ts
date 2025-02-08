import { describe, expect, test } from 'bun:test'
import { normalizeInset } from './inset'

describe('normalizeInset', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeInset(null as any)).toBe('auto')
    expect(normalizeInset(undefined as any)).toBe('auto')
    expect(normalizeInset('auto')).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeInset('auto')).toBe('auto')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeInset('10px')).toBe('0.625rem')
    expect(normalizeInset(10)).toBe('0.625rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeInset('10%')).toBe('10%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeInset('calc(anchor(50%) + 10px)')).toBe(
      'calc(anchor(50%) + 10px)'
    )
    expect(
      normalizeInset(
        'anchor-size(block) calc(anchor(50%) + 10px) auto calc(anchor-size(width) / 4)'
      )
    ).toBe(
      'anchor-size(block) calc(anchor(50%) + 10px) auto calc(anchor-size(width) / 4)'
    )
  })

  test('should apply shorthand logic for arrays', () => {
    expect(normalizeInset(['10px'])).toBe('0.625rem')
    expect(normalizeInset(['10px', '20px'])).toBe('0.625rem 1.25rem')
    expect(normalizeInset(['10px', '20px', '10px'])).toBe('0.625rem 1.25rem')
    expect(normalizeInset(['10px', '20px', '30px', '40px'])).toBe(
      '0.625rem 1.25rem 1.875rem 2.5rem'
    )
    expect(normalizeInset(['10px', '10px', '10px', '10px'])).toBe('0.625rem')
    expect(normalizeInset(['10px', '20px', '10px', '20px'])).toBe(
      '0.625rem 1.25rem'
    )
  })

  test('should handle edge cases gracefully', () => {
    expect(normalizeInset('')).toBe('auto')
    expect(normalizeInset('invalid-value')).toBe('invalid-value')
    expect(normalizeInset(['10px', undefined, null, '20px'])).toBe(
      '0.625rem 0 0 1.25rem'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeInset('inherit')).toBe('inherit')
    expect(normalizeInset('initial')).toBe('initial')
    expect(normalizeInset('revert')).toBe('revert')
    expect(normalizeInset('revert-layer')).toBe('revert-layer')
    expect(normalizeInset('unset')).toBe('unset')
  })
})
