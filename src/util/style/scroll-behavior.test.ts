import { describe, expect, test } from 'bun:test'
import { normalizeScrollBehavior } from './scroll-behavior'

describe('normalizeScrollBehavior', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeScrollBehavior(null as any)).toBe('auto')
    expect(normalizeScrollBehavior(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeScrollBehavior('auto')).toBe('auto')
    expect(normalizeScrollBehavior('smooth')).toBe('smooth')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeScrollBehavior('inherit')).toBe('inherit')
    expect(normalizeScrollBehavior('initial')).toBe('initial')
    expect(normalizeScrollBehavior('revert')).toBe('revert')
    expect(normalizeScrollBehavior('revert-layer')).toBe('revert-layer')
    expect(normalizeScrollBehavior('unset')).toBe('unset')
  })
})
