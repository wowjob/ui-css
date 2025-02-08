import { describe, expect, test } from 'bun:test'
import { normalizeTextDecoration } from './text-decoration'

describe('normalizeTextDecoration', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeTextDecoration(null as any)).toBe('none')
    expect(normalizeTextDecoration(undefined as any)).toBe('none')
  })

  test('should return string values as-is', () => {
    expect(normalizeTextDecoration('underline')).toBe('underline')
    expect(normalizeTextDecoration('underline overline')).toBe(
      'underline overline'
    )
  })

  test('should join array values with spaces', () => {
    expect(normalizeTextDecoration(['underline', 'overline'])).toBe(
      'underline overline'
    )
    expect(normalizeTextDecoration(['solid', 'red'])).toBe('solid red')
  })

  test('should normalize object values', () => {
    expect(
      normalizeTextDecoration({
        line: 'underline',
        style: 'solid',
        color: 'red',
        thickness: '2px',
      })
    ).toBe('underline solid red 0.125rem') // Assuming 16px base font size
    expect(
      normalizeTextDecoration({
        line: 'overline',
        style: 'dashed',
        thickness: 3,
      })
    ).toBe('overline dashed 0.1875rem')
  })

  test('should handle global keyword values in object', () => {
    expect(
      normalizeTextDecoration({
        line: 'inherit',
        style: 'initial',
        color: 'unset',
        thickness: 'revert-layer',
      })
    ).toBe('inherit initial unset revert-layer')
  })
})
