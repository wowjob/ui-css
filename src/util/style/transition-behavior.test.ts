import { describe, expect, test } from 'bun:test'
import { normalizeTransitionBehavior } from './transition-behavior'

describe('normalizeTransitionBehavior', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeTransitionBehavior(null as any)).toBe('normal')
    expect(normalizeTransitionBehavior(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTransitionBehavior('allow-discrete')).toBe('allow-discrete')
    expect(normalizeTransitionBehavior('normal')).toBe('normal')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTransitionBehavior('inherit')).toBe('inherit')
    expect(normalizeTransitionBehavior('initial')).toBe('initial')
    expect(normalizeTransitionBehavior('revert')).toBe('revert')
    expect(normalizeTransitionBehavior('revert-layer')).toBe('revert-layer')
    expect(normalizeTransitionBehavior('unset')).toBe('unset')
  })
})
