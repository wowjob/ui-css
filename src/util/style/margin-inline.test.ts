import { describe, expect, test } from 'bun:test'
import { normalizeMarginInline } from './margin-inline'

describe('normalizeMarginInline', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeMarginInline(null as any)).toBe('auto')
    expect(normalizeMarginInline(undefined as any)).toBe('auto')
    expect(normalizeMarginInline('auto')).toBe('auto')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeMarginInline('10px')).toBe('0.625rem')
    expect(normalizeMarginInline(10)).toBe('0.625rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeMarginInline('5%')).toBe('5%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeMarginInline('calc(anchor-size(self-block) / 5)')).toBe(
      'calc(anchor-size(self-block) / 5)'
    )
    expect(normalizeMarginInline('anchor-size(width)')).toBe(
      'anchor-size(width)'
    )
  })

  test('should handle arrays with shorthand logic', () => {
    expect(normalizeMarginInline(['10px'])).toBe('0.625rem')
    expect(normalizeMarginInline(['10px', '20px'])).toBe('0.625rem 1.25rem')
    expect(normalizeMarginInline(['10px', '10px'])).toBe('0.625rem')
  })

  test('should handle objects with start and end keys', () => {
    expect(normalizeMarginInline({ start: '10px', end: '20px' })).toBe(
      '0.625rem 1.25rem'
    )
    expect(normalizeMarginInline({ start: '10px' })).toBe('0.625rem auto')
    expect(normalizeMarginInline({ end: '20px' })).toBe('auto 1.25rem')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMarginInline('inherit')).toBe('inherit')
    expect(normalizeMarginInline('initial')).toBe('initial')
    expect(normalizeMarginInline('revert')).toBe('revert')
    expect(normalizeMarginInline('revert-layer')).toBe('revert-layer')
    expect(normalizeMarginInline('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {
    expect(normalizeMarginInline(['10px', undefined])).toBe('0.625rem auto')
  })
})
