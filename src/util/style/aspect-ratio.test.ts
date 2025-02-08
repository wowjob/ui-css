import { describe, expect, test } from 'bun:test'
import { normalizeAspectRatio } from './aspect-ratio'

describe('normalizeAspectRatio', () => {
  test('should return valid fraction values as-is', () => {
    expect(normalizeAspectRatio('1 / 1')).toBe('1 / 1')
    expect(normalizeAspectRatio('16 / 9')).toBe('16 / 9')
  })

  test('should return single numeric values as-is', () => {
    expect(normalizeAspectRatio('1')).toBe('1')
    expect(normalizeAspectRatio('16')).toBe('16')
  })

  test('should return valid auto fallback combinations as-is', () => {
    expect(normalizeAspectRatio('auto 3 / 4')).toBe('auto 3 / 4')
    expect(normalizeAspectRatio('9 / 6 auto')).toBe('9 / 6 auto')
  })

  test('should return "auto" for null or undefined', () => {
    expect(normalizeAspectRatio(undefined as any)).toBe('auto')
    expect(normalizeAspectRatio(null as any)).toBe('auto')
  })

  test('should return global keywords as-is', () => {
    expect(normalizeAspectRatio('inherit')).toBe('inherit')
    expect(normalizeAspectRatio('initial')).toBe('initial')
    expect(normalizeAspectRatio('revert')).toBe('revert')
    expect(normalizeAspectRatio('revert-layer')).toBe('revert-layer')
    expect(normalizeAspectRatio('unset')).toBe('unset')
  })
})
