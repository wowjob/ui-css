import { describe, expect, test } from 'bun:test'
import { normalizeTextAnchor } from './text-anchor'

describe('normalizeTextAnchor', () => {
  test('should return "start" for null or undefined', () => {
    expect(normalizeTextAnchor(null as any)).toBe('start')
    expect(normalizeTextAnchor(undefined as any)).toBe('start')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTextAnchor('start')).toBe('start')
    expect(normalizeTextAnchor('middle')).toBe('middle')
    expect(normalizeTextAnchor('end')).toBe('end')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextAnchor('inherit')).toBe('inherit')
    expect(normalizeTextAnchor('initial')).toBe('initial')
    expect(normalizeTextAnchor('revert')).toBe('revert')
    expect(normalizeTextAnchor('revert-layer')).toBe('revert-layer')
    expect(normalizeTextAnchor('unset')).toBe('unset')
  })
})
