import { convertToRem } from '../convert-to-rem'
import { normalizeDirectional } from './normalize-directional'
import { describe, expect, test } from 'bun:test'

describe('normalizeDirectional', () => {
  test('should return the string value as-is', () => {
    expect(normalizeDirectional('32px', convertToRem)).toBe('2rem')
    expect(normalizeDirectional('1rem', convertToRem)).toBe('1rem')
  })

  test('should convert a numeric value using the convertToRem function', () => {
    expect(normalizeDirectional(16, convertToRem)).toBe('1rem')
    expect(normalizeDirectional(0, convertToRem)).toBe('0')
  })

  test('should normalize an array value and convert each unit', () => {
    expect(normalizeDirectional([16], convertToRem)).toBe('1rem')
    expect(normalizeDirectional([16, 32], convertToRem)).toBe('1rem 2rem')
    expect(normalizeDirectional([16, 32, 48], convertToRem)).toBe(
      '1rem 2rem 3rem',
    )
    expect(normalizeDirectional([16, 32, 48, 64], convertToRem)).toBe(
      '1rem 2rem 3rem 4rem',
    )
  })

  test('should normalize an object value and convert each unit', () => {
    expect(normalizeDirectional({ top: 16 }, convertToRem)).toBe('1rem 0 0')
    expect(normalizeDirectional({ top: 16, right: 32 }, convertToRem)).toBe(
      '1rem 2rem 0 0',
    )
    expect(
      normalizeDirectional({ top: 16, right: 32, bottom: 48 }, convertToRem),
    ).toBe('1rem 2rem 3rem 0')
    expect(
      normalizeDirectional(
        { top: 16, right: 32, bottom: 48, left: 64 },
        convertToRem,
      ),
    ).toBe('1rem 2rem 3rem 4rem')
  })

  test('should handle missing values in the object and apply defaults', () => {
    expect(normalizeDirectional({}, convertToRem)).toBe('0')
    expect(normalizeDirectional({ right: 32 }, convertToRem)).toBe('0 2rem 0 0')
  })
})
