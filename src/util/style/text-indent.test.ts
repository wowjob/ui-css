import { describe, expect, test } from 'bun:test'
import { normalizeTextIndent } from './text-indent'

describe('normalizeTextIndent', () => {
  test('should return "0" for null or undefined', () => {
    expect(normalizeTextIndent(null as any)).toBe('0')
    expect(normalizeTextIndent(undefined as any)).toBe('0')
  })

  test('should convert px values to rem', () => {
    expect(normalizeTextIndent('40px')).toBe('2.5rem') // Assuming 16px base font size
    expect(normalizeTextIndent(32)).toBe('2rem')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeTextIndent('15%')).toBe('15%')
  })

  test('should handle keyword values', () => {
    expect(normalizeTextIndent('5em each-line')).toBe('5em each-line')
    expect(normalizeTextIndent('5em hanging')).toBe('5em hanging')
    expect(normalizeTextIndent('5em hanging each-line')).toBe(
      '5em hanging each-line'
    )
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextIndent('inherit')).toBe('inherit')
    expect(normalizeTextIndent('initial')).toBe('initial')
    expect(normalizeTextIndent('revert')).toBe('revert')
    expect(normalizeTextIndent('revert-layer')).toBe('revert-layer')
    expect(normalizeTextIndent('unset')).toBe('unset')
  })
})
