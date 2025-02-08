import { describe, expect, test } from 'bun:test'
import { normalizeShapeMargin } from './shape-margin'

describe('normalizeShapeMargin', () => {
  test('should return "0" for null or undefined', () => {
    expect(normalizeShapeMargin(null as any)).toBe('0')
    expect(normalizeShapeMargin(undefined as any)).toBe('0')
  })

  test('should normalize <length> values in px to rem', () => {
    expect(normalizeShapeMargin('10px')).toBe('0.625rem')
    expect(normalizeShapeMargin(16)).toBe('1rem')
  })

  test('should return other <length> or <percentage> values as-is', () => {
    expect(normalizeShapeMargin('20mm')).toBe('20mm')
    expect(normalizeShapeMargin('60%')).toBe('60%')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeShapeMargin('inherit')).toBe('inherit')
    expect(normalizeShapeMargin('initial')).toBe('initial')
    expect(normalizeShapeMargin('revert')).toBe('revert')
    expect(normalizeShapeMargin('revert-layer')).toBe('revert-layer')
    expect(normalizeShapeMargin('unset')).toBe('unset')
  })
})
