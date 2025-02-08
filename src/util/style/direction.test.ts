import { describe, expect, test } from 'bun:test'
import { normalizeDirection } from './direction'

describe('normalizeDirection', () => {
  test('should return "ltr" for null or undefined', () => {
    expect(normalizeDirection(null as any)).toBe('ltr')
    expect(normalizeDirection(undefined as any)).toBe('ltr')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeDirection('ltr')).toBe('ltr')
    expect(normalizeDirection('rtl')).toBe('rtl')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeDirection('inherit')).toBe('inherit')
    expect(normalizeDirection('initial')).toBe('initial')
    expect(normalizeDirection('revert')).toBe('revert')
    expect(normalizeDirection('revert-layer')).toBe('revert-layer')
    expect(normalizeDirection('unset')).toBe('unset')
  })
})
