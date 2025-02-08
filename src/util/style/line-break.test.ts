import { describe, expect, test } from 'bun:test'
import { normalizeLineBreak } from './line-break'

describe('normalizeLineBreak', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeLineBreak(null as any)).toBe('auto')
    expect(normalizeLineBreak(undefined as any)).toBe('auto')
    expect(normalizeLineBreak('auto')).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeLineBreak('loose')).toBe('loose')
    expect(normalizeLineBreak('normal')).toBe('normal')
    expect(normalizeLineBreak('strict')).toBe('strict')
    expect(normalizeLineBreak('anywhere')).toBe('anywhere')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeLineBreak('inherit')).toBe('inherit')
    expect(normalizeLineBreak('initial')).toBe('initial')
    expect(normalizeLineBreak('revert')).toBe('revert')
    expect(normalizeLineBreak('revert-layer')).toBe('revert-layer')
    expect(normalizeLineBreak('unset')).toBe('unset')
  })
})
