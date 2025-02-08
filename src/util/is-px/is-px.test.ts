import { isPx } from './is-px'
import { describe, expect, test } from 'bun:test'

describe('isPx', () => {
  test('should return true for valid pixel values', () => {
    expect(isPx('10px')).toBe(true)
    expect(isPx('0px')).toBe(true)
    expect(isPx('10.5px')).toBe(true)
    expect(isPx('010px')).toBe(true)
  })

  test('should return false for invalid pixel values', () => {
    expect(isPx('10')).toBe(false)
    expect(isPx('abc')).toBe(false)
    expect(isPx('10pxabc')).toBe(false)
    expect(isPx('px10')).toBe(false)
    expect(isPx('')).toBe(false)
    expect(isPx('10 px')).toBe(false)
  })
})
