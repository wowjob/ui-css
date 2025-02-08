import { describe, expect, test } from 'bun:test'
import { normalizeStrokeDashoffset } from './stroke-dashoffset'

describe('normalizeStrokeDashoffset', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeStrokeDashoffset(null as any)).toBe('none')
    expect(normalizeStrokeDashoffset(undefined as any)).toBe('none')
    expect(normalizeStrokeDashoffset('none')).toBe('none')
  })

  test('should convert numeric values to rem', () => {
    expect(normalizeStrokeDashoffset(16)).toBe('1rem') // Assuming 16px base font size
    expect(normalizeStrokeDashoffset(8)).toBe('0.5rem')
  })

  test('should convert px values to rem', () => {
    expect(normalizeStrokeDashoffset('16px')).toBe('1rem')
    expect(normalizeStrokeDashoffset('8px')).toBe('0.5rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeStrokeDashoffset('50%')).toBe('50%')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeStrokeDashoffset('inherit')).toBe('inherit')
    expect(normalizeStrokeDashoffset('initial')).toBe('initial')
    expect(normalizeStrokeDashoffset('revert')).toBe('revert')
    expect(normalizeStrokeDashoffset('revert-layer')).toBe('revert-layer')
    expect(normalizeStrokeDashoffset('unset')).toBe('unset')
  })
})
