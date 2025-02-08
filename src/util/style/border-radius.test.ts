import { describe, expect, test } from 'bun:test'
import { normalizeBorderRadius } from './border-radius'

describe('normalizeBorderRadius', () => {
  test('should return a string border-radius value as-is', () => {
    expect(normalizeBorderRadius('10px')).toBe('10px')
    expect(normalizeBorderRadius('50%')).toBe('50%')
  })

  test('should normalize numeric values', () => {
    expect(normalizeBorderRadius(16)).toBe('1rem')
    expect(normalizeBorderRadius(0)).toBe('0')
  })

  test('should normalize array values', () => {
    expect(normalizeBorderRadius(['10px', '20px', '30px', '40px'])).toBe(
      '0.625rem 1.25rem 1.875rem 2.5rem'
    )
    expect(normalizeBorderRadius(['10px', '20px'])).toBe('0.625rem 1.25rem')
    expect(normalizeBorderRadius(['10px'])).toBe('0.625rem')
  })

  test('should normalize object values', () => {
    expect(
      normalizeBorderRadius({
        topLeft: '10px',
        topRight: '20px',
        bottomRight: '30px',
        bottomLeft: '40px',
      })
    ).toBe('0.625rem 1.25rem 1.875rem 2.5rem')
  })

  test('should handle partial object values with defaults', () => {
    expect(
      normalizeBorderRadius({
        topLeft: '10px',
        bottomRight: '20px',
      })
    ).toBe('0.625rem 0 1.25rem')
  })

  test('should handle invalid or missing values gracefully', () => {
    expect(normalizeBorderRadius(undefined as any)).toBe('0')
    expect(normalizeBorderRadius(null as any)).toBe('0')
  })
})
