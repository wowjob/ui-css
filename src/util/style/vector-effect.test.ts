import { describe, expect, test } from 'bun:test'
import { normalizeVectorEffect } from './vector-effect'

describe('normalizeVectorEffect', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeVectorEffect(null as any)).toBe('none')
    expect(normalizeVectorEffect(undefined as any)).toBe('none')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeVectorEffect('none')).toBe('none')
    expect(normalizeVectorEffect('non-scaling-stroke')).toBe(
      'non-scaling-stroke'
    )
    expect(normalizeVectorEffect('non-scaling-size')).toBe('non-scaling-size')
    expect(normalizeVectorEffect('non-rotation')).toBe('non-rotation')
    expect(normalizeVectorEffect('fixed-position')).toBe('fixed-position')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeVectorEffect('inherit')).toBe('inherit')
    expect(normalizeVectorEffect('initial')).toBe('initial')
    expect(normalizeVectorEffect('revert')).toBe('revert')
    expect(normalizeVectorEffect('revert-layer')).toBe('revert-layer')
    expect(normalizeVectorEffect('unset')).toBe('unset')
  })
})
