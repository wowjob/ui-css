import { describe, expect, test } from 'bun:test'
import { normalizeHyphenateCharacter } from './hyphenate-character'

describe('normalizeHyphenateCharacter', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeHyphenateCharacter(null as any)).toBe('auto')
    expect(normalizeHyphenateCharacter(undefined as any)).toBe('auto')
    expect(normalizeHyphenateCharacter('auto')).toBe('auto')
  })

  test('should return string values as-is', () => {
    expect(normalizeHyphenateCharacter('-')).toBe('-')
    expect(normalizeHyphenateCharacter('*')).toBe('*')
    expect(normalizeHyphenateCharacter('~')).toBe('~')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeHyphenateCharacter('inherit')).toBe('inherit')
    expect(normalizeHyphenateCharacter('initial')).toBe('initial')
    expect(normalizeHyphenateCharacter('revert')).toBe('revert')
    expect(normalizeHyphenateCharacter('revert-layer')).toBe('revert-layer')
    expect(normalizeHyphenateCharacter('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {
    expect(normalizeHyphenateCharacter('')).toBe('auto')
    expect(normalizeHyphenateCharacter('invalid-char')).toBe('invalid-char')
  })
})
