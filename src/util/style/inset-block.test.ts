import { describe, expect, test } from 'bun:test'
import { normalizeInsetBlock } from './inset-block'

describe('normalizeInsetBlock', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeInsetBlock(null as any)).toBe('auto')
    expect(normalizeInsetBlock(undefined as any)).toBe('auto')
    expect(normalizeInsetBlock('auto')).toBe('auto')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeInsetBlock('10px')).toBe('0.625rem')
    expect(normalizeInsetBlock(10)).toBe('0.625rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeInsetBlock('10%')).toBe('10%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeInsetBlock('anchor(start)')).toBe('anchor(start)')
    expect(normalizeInsetBlock('anchor-size(--myAnchor height, 10%)')).toBe(
      'anchor-size(--myAnchor height, 10%)'
    )
  })

  test('should handle arrays with shorthand logic', () => {
    expect(normalizeInsetBlock(['10px'])).toBe('0.625rem')
    expect(normalizeInsetBlock(['10px', '20px'])).toBe('0.625rem 1.25rem')
    expect(normalizeInsetBlock(['10px', '10px'])).toBe('0.625rem')
  })

  test('should handle objects with start and end keys', () => {
    expect(normalizeInsetBlock({ start: '10px', end: '20px' })).toBe(
      '0.625rem 1.25rem'
    )
    expect(normalizeInsetBlock({ start: '10px' })).toBe('0.625rem auto')
    expect(normalizeInsetBlock({ end: '20px' })).toBe('auto 1.25rem')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeInsetBlock('inherit')).toBe('inherit')
    expect(normalizeInsetBlock('initial')).toBe('initial')
    expect(normalizeInsetBlock('revert')).toBe('revert')
    expect(normalizeInsetBlock('revert-layer')).toBe('revert-layer')
    expect(normalizeInsetBlock('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {
    expect(normalizeInsetBlock(['10px', undefined])).toBe('0.625rem auto')
  })
})
