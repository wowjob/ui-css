import { describe, expect, test } from 'bun:test'
import { normalizeBorderStartEndRadius } from './border-start-end-radius'

describe('normalizeBorderStartEndRadius', () => {
  test('should return a string value as-is if it is not in px', () => {
    expect(normalizeBorderStartEndRadius('50%')).toBe('50%')
  })

  test('should convert pixel values to rem', () => {
    expect(normalizeBorderStartEndRadius('16px')).toBe('1rem')
  })

  test('should convert numeric values to rem', () => {
    expect(normalizeBorderStartEndRadius(16)).toBe('1rem')
  })

  test('should return "0" for null or undefined', () => {
    expect(normalizeBorderStartEndRadius(undefined as any)).toBe('0')
    expect(normalizeBorderStartEndRadius(null as any)).toBe('0')
  })

  test('should return a global keyword as-is', () => {
    expect(normalizeBorderStartEndRadius('inherit')).toBe('inherit')
  })
})
