import { describe, expect, test } from 'bun:test'
import { normalizeBorderEndEndRadius } from './border-end-end-radius'

describe('normalizeBorderEndEndRadius', () => {
  test('should return a string value as-is if it is not in px', () => {
    expect(normalizeBorderEndEndRadius('50%')).toBe('50%')
  })

  test('should convert pixel values to rem', () => {
    expect(normalizeBorderEndEndRadius('16px')).toBe('1rem')
  })

  test('should convert numeric values to rem', () => {
    expect(normalizeBorderEndEndRadius(16)).toBe('1rem')
  })

  test('should return "0" for null or undefined', () => {
    expect(normalizeBorderEndEndRadius(undefined as any)).toBe('0')
    expect(normalizeBorderEndEndRadius(null as any)).toBe('0')
  })

  test('should return a global keyword as-is', () => {
    expect(normalizeBorderEndEndRadius('inherit')).toBe('inherit')
  })
})
