import { describe, expect, test } from 'bun:test'
import { normalizeFontWeight } from './font-weight'

describe('normalizeFontWeight', () => {
  test('should return "normal" for null, undefined, or "normal"', () => {
    expect(normalizeFontWeight(null as any)).toBe('normal')
    expect(normalizeFontWeight(undefined as any)).toBe('normal')
    expect(normalizeFontWeight('normal')).toBe('normal')
  })

  test('should return "bold" for "bold"', () => {
    expect(normalizeFontWeight('bold')).toBe('bold')
  })

  test('should return valid numeric values as strings', () => {
    expect(normalizeFontWeight(100)).toBe('100')
    expect(normalizeFontWeight(400)).toBe('400') // Normal equivalent
    expect(normalizeFontWeight(700)).toBe('700') // Bold equivalent
    expect(normalizeFontWeight(900)).toBe('900')
  })

  test('should clamp numeric values between 1 and 1000', () => {
    expect(normalizeFontWeight(0)).toBe('1') // Clamped to minimum
    expect(normalizeFontWeight(-10)).toBe('1') // Clamped to minimum
    expect(normalizeFontWeight(1500)).toBe('1000') // Clamped to maximum
    expect(normalizeFontWeight(1100)).toBe('1000') // Clamped to maximum
  })

  test('should return relative keyword values as-is', () => {
    expect(normalizeFontWeight('lighter')).toBe('lighter')
    expect(normalizeFontWeight('bolder')).toBe('bolder')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeFontWeight('inherit')).toBe('inherit')
    expect(normalizeFontWeight('initial')).toBe('initial')
    expect(normalizeFontWeight('revert')).toBe('revert')
    expect(normalizeFontWeight('revert-layer')).toBe('revert-layer')
    expect(normalizeFontWeight('unset')).toBe('unset')
  })
})
