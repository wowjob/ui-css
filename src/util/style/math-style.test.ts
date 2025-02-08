import { describe, expect, test } from 'bun:test'
import { normalizeMathStyle } from './math-style'

describe('normalizeMathStyle', () => {
  test('should return "normal" for null, undefined, or "normal"', () => {
    expect(normalizeMathStyle(null as any)).toBe('normal')
    expect(normalizeMathStyle(undefined as any)).toBe('normal')
    expect(normalizeMathStyle('normal')).toBe('normal')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeMathStyle('compact')).toBe('compact')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMathStyle('inherit')).toBe('inherit')
    expect(normalizeMathStyle('initial')).toBe('initial')
    expect(normalizeMathStyle('revert')).toBe('revert')
    expect(normalizeMathStyle('revert-layer')).toBe('revert-layer')
    expect(normalizeMathStyle('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {})
})
