import { describe, expect, test } from 'bun:test'
import { normalizeBorderEndStartRadius } from './border-end-start-radius'

describe('normalizeBorderEndStartRadius', () => {
  test('should return a string value as-is if it is not in px', () => {
    expect(normalizeBorderEndStartRadius('50%')).toBe('50%')
  })

  test('should convert pixel values to rem', () => {
    expect(normalizeBorderEndStartRadius('16px')).toBe('1rem')
  })

  test('should convert numeric values to rem', () => {
    expect(normalizeBorderEndStartRadius(16)).toBe('1rem')
  })

  test('should return "0" for null or undefined', () => {
    expect(normalizeBorderEndStartRadius(undefined as any)).toBe('0')
    expect(normalizeBorderEndStartRadius(null as any)).toBe('0')
  })

  test('should return a global keyword as-is', () => {
    expect(normalizeBorderEndStartRadius('inherit')).toBe('inherit')
  })
})
