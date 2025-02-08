import { describe, expect, test } from 'bun:test'
import { normalizeFloat } from './float'

describe('normalizeFloat', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeFloat(null as any)).toBe('none')
    expect(normalizeFloat(undefined as any)).toBe('none')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFloat('left')).toBe('left')
    expect(normalizeFloat('right')).toBe('right')
    expect(normalizeFloat('none')).toBe('none')
    expect(normalizeFloat('inline-start')).toBe('inline-start')
    expect(normalizeFloat('inline-end')).toBe('inline-end')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFloat('inherit')).toBe('inherit')
    expect(normalizeFloat('initial')).toBe('initial')
    expect(normalizeFloat('revert')).toBe('revert')
    expect(normalizeFloat('revert-layer')).toBe('revert-layer')
    expect(normalizeFloat('unset')).toBe('unset')
  })
})
