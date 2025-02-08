import { describe, expect, test } from 'bun:test'
import { normalizeTabSize } from './tab-size'

describe('normalizeTabSize', () => {
  test('should return "8" for null or undefined', () => {
    expect(normalizeTabSize(null as any)).toBe('8')
    expect(normalizeTabSize(undefined as any)).toBe('8')
  })

  test('should convert px values to rem', () => {
    expect(normalizeTabSize('10px')).toBe('0.625rem') // Assuming 16px base font size
  })

  test('should return length values as-is', () => {
    expect(normalizeTabSize('2em')).toBe('2em')
  })

  test('should return number values as strings', () => {
    expect(normalizeTabSize(4)).toBe('4')
    expect(normalizeTabSize(0)).toBe('0')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTabSize('inherit')).toBe('inherit')
    expect(normalizeTabSize('initial')).toBe('initial')
    expect(normalizeTabSize('revert')).toBe('revert')
    expect(normalizeTabSize('revert-layer')).toBe('revert-layer')
    expect(normalizeTabSize('unset')).toBe('unset')
  })
})
