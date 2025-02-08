import { describe, test, expect } from 'bun:test'
import { condensedFour } from './four'

describe('condensedFour', () => {
  test('should return "0" for an empty array', () => {
    expect(condensedFour([])).toBe('0')
  })

  test('should return a single value when all four values are the same', () => {
    expect(condensedFour(['10px', '10px', '10px', '10px'])).toBe('10px')
    expect(condensedFour(['inherit', 'inherit', 'inherit', 'inherit'])).toBe(
      'inherit',
    )
  })

  test('should return a single value when top, bottom, and leftRight are the same', () => {
    expect(condensedFour(['10px', '10px', '10px'])).toBe('10px')
  })

  test('should return two values when top and bottom are the same, and left and right are the same', () => {
    expect(condensedFour(['10px', '20px', '10px', '20px'])).toBe('10px 20px')
    expect(condensedFour(['1rem', '2rem', '1rem', '2rem'])).toBe('1rem 2rem')
  })

  test('should return two values when topBottom === leftRight', () => {
    expect(condensedFour(['10px', '10px'])).toBe('10px')
  })

  test('should return three values when top is different, and left and right are the same', () => {
    expect(condensedFour(['10px', '20px', '30px', '20px'])).toBe(
      '10px 20px 30px',
    )
    expect(condensedFour(['5%', '10%', '15%', '10%'])).toBe('5% 10% 15%')
  })

  test('should return three values when top === bottom but leftRight is different', () => {
    expect(condensedFour(['10px', '20px', '10px'])).toBe('10px 20px')
  })

  test('should return four values when all values are different', () => {
    expect(condensedFour(['10px', '20px', '30px', '40px'])).toBe(
      '10px 20px 30px 40px',
    )
    expect(condensedFour(['1em', '2em', '3em', '4em'])).toBe('1em 2em 3em 4em')
  })

  test('should handle arrays with fewer than 4 values', () => {
    expect(condensedFour(['10px'])).toBe('10px')
    expect(condensedFour(['10px', '20px'])).toBe('10px 20px')
    expect(condensedFour(['10px', '20px', '30px'])).toBe('10px 20px 30px')
  })

  test('should handle arrays with special CSS values', () => {
    expect(condensedFour(['inherit', 'initial', 'unset', 'auto'])).toBe(
      'inherit initial unset auto',
    )
    expect(condensedFour(['revert', 'revert-layer'])).toBe(
      'revert revert-layer',
    )
  })

  test('should default missing values to "0"', () => {
    expect(condensedFour(['10px', '20px'])).toBe('10px 20px')
    expect(condensedFour(['10px'])).toBe('10px')
  })

  test('should truncate arrays with more than 4 values', () => {
    expect(condensedFour(['10px', '20px', '30px', '40px', '50px'])).toBe(
      '10px 20px 30px 40px',
    )
  })

  test('should handle empty strings as "0"', () => {
    expect(condensedFour(['', '', '', ''])).toBe('0')
  })

  test('should return "0" for a single zero value', () => {
    expect(condensedFour(['0'])).toBe('0')
  })

  test('should handle truncation with mixed values', () => {
    expect(
      condensedFour(['10px', '20px', '30px', '40px', '50px', '60px']),
    ).toBe('10px 20px 30px 40px')
    expect(condensedFour(['10px', 'auto', 'unset', 'inherit', '20px'])).toBe(
      '10px auto unset inherit',
    )
  })

  test('should handle mixed empty strings, null, and undefined as "0"', () => {
    expect(condensedFour(['', null, undefined, ''] as any)).toBe('0')
  })

  test('should handle null or undefined values as "0"', () => {
    expect(condensedFour([null, null, null, null] as any)).toBe('0')
    expect(
      condensedFour([undefined, undefined, undefined, undefined] as any),
    ).toBe('0')
  })

  test('should return single keyword value as-is', () => {
    expect(condensedFour(['inherit'])).toBe('inherit')
    expect(condensedFour(['auto'])).toBe('auto')
  })

  test('should handle partially missing values in length === 3', () => {
    expect(condensedFour(['10px', undefined, '10px'] as any)).toBe('10px 0')
    expect(condensedFour(['10px', null, '30px'] as any)).toBe('10px 0 30px')
  })
})
