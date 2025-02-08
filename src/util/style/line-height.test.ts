import { describe, expect, test } from 'bun:test'
import { normalizeLineHeight } from './line-height'

describe('normalizeLineHeight', () => {
  test('should return "normal" for null, undefined, or "normal"', () => {
    expect(normalizeLineHeight(null as any)).toBe('normal')
    expect(normalizeLineHeight(undefined as any)).toBe('normal')
    expect(normalizeLineHeight('normal')).toBe('normal')
  })

  test('should handle unitless values as-is', () => {
    expect(normalizeLineHeight(3.5)).toBe(3.5)
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeLineHeight('3px')).toBe('0.1875rem')
  })

  test('should handle em values as-is', () => {
    expect(normalizeLineHeight('3em')).toBe('3em')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeLineHeight('34%')).toBe('34%')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeLineHeight('inherit')).toBe('inherit')
    expect(normalizeLineHeight('initial')).toBe('initial')
    expect(normalizeLineHeight('revert')).toBe('revert')
    expect(normalizeLineHeight('revert-layer')).toBe('revert-layer')
    expect(normalizeLineHeight('unset')).toBe('unset')
  })
})
