import { describe, expect, test } from 'bun:test'
import { normalizeWhiteSpace } from './white-space'

describe('normalizeWhiteSpace', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeWhiteSpace(null as any)).toBe('normal')
    expect(normalizeWhiteSpace(undefined as any)).toBe('normal')
  })

  test('should return valid single keyword values as-is', () => {
    expect(normalizeWhiteSpace('normal')).toBe('normal')
    expect(normalizeWhiteSpace('pre')).toBe('pre')
    expect(normalizeWhiteSpace('pre-wrap')).toBe('pre-wrap')
    expect(normalizeWhiteSpace('pre-line')).toBe('pre-line')
  })

  test('should return shorthand values as-is', () => {
    expect(normalizeWhiteSpace('wrap')).toBe('wrap')
    expect(normalizeWhiteSpace('collapse')).toBe('collapse')
    expect(normalizeWhiteSpace('preserve nowrap')).toBe('preserve nowrap')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeWhiteSpace('inherit')).toBe('inherit')
    expect(normalizeWhiteSpace('initial')).toBe('initial')
    expect(normalizeWhiteSpace('revert')).toBe('revert')
    expect(normalizeWhiteSpace('revert-layer')).toBe('revert-layer')
    expect(normalizeWhiteSpace('unset')).toBe('unset')
  })
})
