import { describe, expect, test } from 'bun:test'
import { normalizeBorderBottomRightRadius } from './border-bottom-right-radius'

describe('normalizeBorderBottomRightRadius', () => {
  test('should return a string value as-is if it is not in px', () => {
    expect(normalizeBorderBottomRightRadius('50%')).toBe('50%')
  })

  test('should convert pixel values to rem', () => {
    expect(normalizeBorderBottomRightRadius('16px')).toBe('1rem')
  })

  test('should convert numeric values to rem', () => {
    expect(normalizeBorderBottomRightRadius(16)).toBe('1rem')
  })

  test('should return "0" for null or undefined', () => {
    expect(normalizeBorderBottomRightRadius(undefined as any)).toBe('0')
    expect(normalizeBorderBottomRightRadius(null as any)).toBe('0')
  })

  test('should return a global keyword as-is', () => {
    expect(normalizeBorderBottomRightRadius('inherit')).toBe('inherit')
  })
})
