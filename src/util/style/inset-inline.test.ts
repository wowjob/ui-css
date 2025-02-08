import { describe, expect, test } from 'bun:test'
import { normalizeInsetInline } from './inset-inline'

describe('normalizeInsetInline', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeInsetInline(null as any)).toBe('auto')
    expect(normalizeInsetInline(undefined as any)).toBe('auto')
    expect(normalizeInsetInline('auto')).toBe('auto')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeInsetInline('10px')).toBe('0.625rem')
    expect(normalizeInsetInline(10)).toBe('0.625rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeInsetInline('10%')).toBe('10%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeInsetInline('anchor(start)')).toBe('anchor(start)')
    expect(normalizeInsetInline('anchor-size(--myAnchor inline, 10%)')).toBe(
      'anchor-size(--myAnchor inline, 10%)'
    )
  })

  test('should handle arrays with shorthand logic', () => {
    expect(normalizeInsetInline(['10px'])).toBe('0.625rem')
    expect(normalizeInsetInline(['10px', '20px'])).toBe('0.625rem 1.25rem')
    expect(normalizeInsetInline(['10px', '10px'])).toBe('0.625rem')
  })

  test('should handle objects with start and end keys', () => {
    expect(normalizeInsetInline({ start: '10px', end: '20px' })).toBe(
      '0.625rem 1.25rem'
    )
    expect(normalizeInsetInline({ start: '10px' })).toBe('0.625rem auto')
    expect(normalizeInsetInline({ end: '20px' })).toBe('auto 1.25rem')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeInsetInline('inherit')).toBe('inherit')
    expect(normalizeInsetInline('initial')).toBe('initial')
    expect(normalizeInsetInline('revert')).toBe('revert')
    expect(normalizeInsetInline('revert-layer')).toBe('revert-layer')
    expect(normalizeInsetInline('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {
    expect(normalizeInsetInline(['10px', undefined])).toBe('0.625rem auto')
  })
})
