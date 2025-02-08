import { describe, expect, test } from 'bun:test'
import { normalizeStrokeWidth } from './stroke-width'

describe('normalizeStrokeWidth', () => {
  test('should return "0" for null or undefined', () => {
    expect(normalizeStrokeWidth(null as any)).toBe('0')
    expect(normalizeStrokeWidth(undefined as any)).toBe('0')
  })

  test('should convert px values to rem', () => {
    expect(normalizeStrokeWidth('1.414px')).toBe('0.088375rem') // Assuming 16px base font size
    expect(normalizeStrokeWidth(16)).toBe('1rem')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeStrokeWidth('0%')).toBe('0%')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeStrokeWidth('inherit')).toBe('inherit')
    expect(normalizeStrokeWidth('initial')).toBe('initial')
    expect(normalizeStrokeWidth('revert')).toBe('revert')
    expect(normalizeStrokeWidth('revert-layer')).toBe('revert-layer')
    expect(normalizeStrokeWidth('unset')).toBe('unset')
  })
})
