import { describe, expect, test } from 'bun:test'
import { normalizeColumnCount } from './column-count'

describe('normalizeColumnCount', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeColumnCount(null as any)).toBe('auto')
    expect(normalizeColumnCount(undefined as any)).toBe('auto')
  })

  test('should return "auto" keyword value as-is', () => {
    expect(normalizeColumnCount('auto')).toBe('auto')
  })

  test('should return <integer> values as-is', () => {
    expect(normalizeColumnCount(3)).toBe(3)
    expect(normalizeColumnCount(0)).toBe(0)
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeColumnCount('inherit')).toBe('inherit')
    expect(normalizeColumnCount('initial')).toBe('initial')
    expect(normalizeColumnCount('revert')).toBe('revert')
    expect(normalizeColumnCount('revert-layer')).toBe('revert-layer')
    expect(normalizeColumnCount('unset')).toBe('unset')
  })
})
