import { describe, expect, test } from 'bun:test'
import { normalizeLetterSpacing } from './letter-spacing'

describe('normalizeLetterSpacing', () => {
  test('should return "normal" for null, undefined, or "normal"', () => {
    expect(normalizeLetterSpacing(null as any)).toBe('normal')
    expect(normalizeLetterSpacing(undefined as any)).toBe('normal')
    expect(normalizeLetterSpacing('normal')).toBe('normal')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeLetterSpacing('3px')).toBe('0.1875rem')
    expect(normalizeLetterSpacing(3)).toBe('0.1875rem')
  })

  test('should handle em values as-is', () => {
    expect(normalizeLetterSpacing('0.3em')).toBe('0.3em')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeLetterSpacing('inherit')).toBe('inherit')
    expect(normalizeLetterSpacing('initial')).toBe('initial')
    expect(normalizeLetterSpacing('revert')).toBe('revert')
    expect(normalizeLetterSpacing('revert-layer')).toBe('revert-layer')
    expect(normalizeLetterSpacing('unset')).toBe('unset')
  })
})
