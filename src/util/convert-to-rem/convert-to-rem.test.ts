import { convertToRem } from './convert-to-rem'
import { describe, expect, test } from 'bun:test'

describe('convertToRem', () => {
  test('should convert numeric values to rem', () => {
    expect(convertToRem(16)).toBe('1rem')
    expect(convertToRem(0)).toBe('0')
    expect(convertToRem(32)).toBe('2rem')
    expect(convertToRem(8)).toBe('0.5rem')
  })

  test('should convert valid pixel string values to rem', () => {
    expect(convertToRem('16px')).toBe('1rem')
    expect(convertToRem('0px')).toBe('0')
    expect(convertToRem('32px')).toBe('2rem')
    expect(convertToRem('8px')).toBe('0.5rem')
    expect(convertToRem('24px')).toBe('1.5rem')
  })

  test('should return the value as-is for invalid pixel string values', () => {
    expect(convertToRem('16')).toBe('16')
    expect(convertToRem('px')).toBe('px')
    expect(convertToRem('abc')).toBe('abc')
    expect(convertToRem('16 px')).toBe('16 px')
  })

  test('should return the value as-is for non-pixel string values', () => {
    expect(convertToRem('1em')).toBe('1em')
    expect(convertToRem('50%')).toBe('50%')
    expect(convertToRem('auto')).toBe('auto')
  })
})
