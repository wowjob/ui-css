import { describe, expect, test } from 'bun:test'
import { normalizeZoom } from './zoom'

describe('normalizeZoom', () => {
  test('should return "normal" for null, undefined, or "normal"', () => {
    expect(normalizeZoom(null as any)).toBe('normal')
    expect(normalizeZoom(undefined as any)).toBe('normal')
    expect(normalizeZoom('normal')).toBe('normal')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeZoom('50%')).toBe('50%')
    expect(normalizeZoom('200%')).toBe('200%')
  })

  test('should return numeric zoom values as strings', () => {
    expect(normalizeZoom(1.1)).toBe('1.1')
    expect(normalizeZoom(0.7)).toBe('0.7')
  })

  test('should return non-standard keyword values as-is', () => {
    expect(normalizeZoom('reset')).toBe('reset')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeZoom('inherit')).toBe('inherit')
    expect(normalizeZoom('initial')).toBe('initial')
    expect(normalizeZoom('revert')).toBe('revert')
    expect(normalizeZoom('revert-layer')).toBe('revert-layer')
    expect(normalizeZoom('unset')).toBe('unset')
  })
})
