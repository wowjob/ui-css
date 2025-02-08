import { describe, expect, test } from 'bun:test'
import { normalizeWordBreak } from './word-break'

describe('normalizeWordBreak', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeWordBreak(null as any)).toBe('normal')
    expect(normalizeWordBreak(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeWordBreak('normal')).toBe('normal')
    expect(normalizeWordBreak('break-all')).toBe('break-all')
    expect(normalizeWordBreak('keep-all')).toBe('keep-all')
    expect(normalizeWordBreak('auto-phrase')).toBe('auto-phrase') // Experimental
    expect(normalizeWordBreak('break-word')).toBe('break-word') // Deprecated
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeWordBreak('inherit')).toBe('inherit')
    expect(normalizeWordBreak('initial')).toBe('initial')
    expect(normalizeWordBreak('revert')).toBe('revert')
    expect(normalizeWordBreak('revert-layer')).toBe('revert-layer')
    expect(normalizeWordBreak('unset')).toBe('unset')
  })
})
