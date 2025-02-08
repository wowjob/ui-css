import { describe, expect, test } from 'bun:test'
import { normalizeColumnFill } from './column-fill'

describe('normalizeColumnFill', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeColumnFill(null as any)).toBe('auto')
    expect(normalizeColumnFill(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeColumnFill('auto')).toBe('auto')
    expect(normalizeColumnFill('balance')).toBe('balance')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeColumnFill('inherit')).toBe('inherit')
    expect(normalizeColumnFill('initial')).toBe('initial')
    expect(normalizeColumnFill('revert')).toBe('revert')
    expect(normalizeColumnFill('revert-layer')).toBe('revert-layer')
    expect(normalizeColumnFill('unset')).toBe('unset')
  })
})
