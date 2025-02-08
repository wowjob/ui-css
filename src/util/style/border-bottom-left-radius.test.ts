import { describe, expect, test } from 'bun:test'
import { normalizeBorderBottomLeftRadius } from './border-bottom-left-radius'

describe('normalizeBorderBottomLeftRadius', () => {
  test('should return a string value as-is if it is not in px', () => {
    expect(normalizeBorderBottomLeftRadius('50%')).toBe('50%')
  })

  test('should convert pixel values to rem', () => {
    expect(normalizeBorderBottomLeftRadius('16px')).toBe('1rem')
  })

  test('should convert numeric values to rem', () => {
    expect(normalizeBorderBottomLeftRadius(16)).toBe('1rem')
  })

  test('should return "0" for null or undefined', () => {
    expect(normalizeBorderBottomLeftRadius(undefined as any)).toBe('0')
    expect(normalizeBorderBottomLeftRadius(null as any)).toBe('0')
  })

  test('should return a global keyword as-is', () => {
    expect(normalizeBorderBottomLeftRadius('inherit')).toBe('inherit')
  })
})
