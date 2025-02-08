import { describe, expect, test } from 'bun:test'
import { normalizeOrder } from './order'

describe('normalizeOrder', () => {
  test('should return "0" for null or undefined', () => {
    expect(normalizeOrder(null as any)).toBe('0')
    expect(normalizeOrder(undefined as any)).toBe('0')
  })

  test('should handle integer values as-is', () => {
    expect(normalizeOrder(5)).toBe(5)
    expect(normalizeOrder(-5)).toBe(-5)
    expect(normalizeOrder(0)).toBe(0)
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeOrder('inherit')).toBe('inherit')
    expect(normalizeOrder('initial')).toBe('initial')
    expect(normalizeOrder('revert')).toBe('revert')
    expect(normalizeOrder('revert-layer')).toBe('revert-layer')
    expect(normalizeOrder('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {
    expect(normalizeOrder('')).toBe('')
    expect(normalizeOrder('invalid-value')).toBe('invalid-value')
  })
})
