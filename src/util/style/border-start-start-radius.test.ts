import { describe, expect, test } from 'bun:test'
import { normalizeBorderStartStartRadius } from './border-start-start-radius'

describe('normalizeBorderStartStartRadius', () => {
  test('should return a string value as-is if it is not in px', () => {
    expect(normalizeBorderStartStartRadius('50%')).toBe('50%')
  })

  test('should convert pixel values to rem', () => {
    expect(normalizeBorderStartStartRadius('16px')).toBe('1rem')
  })

  test('should convert numeric values to rem', () => {
    expect(normalizeBorderStartStartRadius(16)).toBe('1rem')
  })

  test('should return "0" for null or undefined', () => {
    expect(normalizeBorderStartStartRadius(undefined as any)).toBe('0')
    expect(normalizeBorderStartStartRadius(null as any)).toBe('0')
  })

  test('should return a global keyword as-is', () => {
    expect(normalizeBorderStartStartRadius('inherit')).toBe('inherit')
  })
})
