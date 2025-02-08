import { describe, expect, test } from 'bun:test'
import { normalizeMarginBlock } from './margin-block'

describe('normalizeMarginBlock', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeMarginBlock(null as any)).toBe('auto')
    expect(normalizeMarginBlock(undefined as any)).toBe('auto')
    expect(normalizeMarginBlock('auto')).toBe('auto')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeMarginBlock('10px')).toBe('0.625rem')
    expect(normalizeMarginBlock(10)).toBe('0.625rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeMarginBlock('5%')).toBe('5%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeMarginBlock('calc(anchor-size(width) / 4)')).toBe(
      'calc(anchor-size(width) / 4)'
    )
    expect(normalizeMarginBlock('anchor-size(inline)')).toBe(
      'anchor-size(inline)'
    )
  })

  test('should handle arrays with shorthand logic', () => {
    expect(normalizeMarginBlock(['10px'])).toBe('0.625rem')
    expect(normalizeMarginBlock(['10px', '20px'])).toBe('0.625rem 1.25rem')
    expect(normalizeMarginBlock(['10px', '10px'])).toBe('0.625rem')
  })

  test('should handle objects with start and end keys', () => {
    expect(normalizeMarginBlock({ start: '10px', end: '20px' })).toBe(
      '0.625rem 1.25rem'
    )
    expect(normalizeMarginBlock({ start: '10px' })).toBe('0.625rem auto')
    expect(normalizeMarginBlock({ end: '20px' })).toBe('auto 1.25rem')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMarginBlock('inherit')).toBe('inherit')
    expect(normalizeMarginBlock('initial')).toBe('initial')
    expect(normalizeMarginBlock('revert')).toBe('revert')
    expect(normalizeMarginBlock('revert-layer')).toBe('revert-layer')
    expect(normalizeMarginBlock('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {
    expect(normalizeMarginBlock(['10px', undefined])).toBe('0.625rem auto')
  })
})
