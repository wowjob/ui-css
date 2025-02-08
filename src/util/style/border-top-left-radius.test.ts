import { describe, expect, test } from 'bun:test'
import { normalizeBorderTopLeftRadius } from './border-top-left-radius'

describe('normalizeBorderTopLeftRadius', () => {
  test('should return a string value as-is if it is not in px', () => {
    expect(normalizeBorderTopLeftRadius('50%')).toBe('50%')
  })

  test('should convert pixel values to rem', () => {
    expect(normalizeBorderTopLeftRadius('16px')).toBe('1rem')
  })

  test('should convert numeric values to rem', () => {
    expect(normalizeBorderTopLeftRadius(16)).toBe('1rem')
  })

  test('should return "0" for null or undefined', () => {
    expect(normalizeBorderTopLeftRadius(undefined as any)).toBe('0')
    expect(normalizeBorderTopLeftRadius(null as any)).toBe('0')
  })

  test('should return a global keyword as-is', () => {
    expect(normalizeBorderTopLeftRadius('inherit')).toBe('inherit')
  })
})
