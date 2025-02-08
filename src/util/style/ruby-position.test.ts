import { describe, expect, test } from 'bun:test'
import { normalizeRubyPosition } from './ruby-position'

describe('normalizeRubyPosition', () => {
  test('should return "over" for null, undefined, or "over"', () => {
    expect(normalizeRubyPosition(null as any)).toBe('over')
    expect(normalizeRubyPosition(undefined as any)).toBe('over')
    expect(normalizeRubyPosition('over')).toBe('over')
  })

  test('should return valid ruby-position keyword values as-is', () => {
    expect(normalizeRubyPosition('under')).toBe('under')
    expect(normalizeRubyPosition('alternate')).toBe('alternate')
    expect(normalizeRubyPosition('alternate over')).toBe('alternate over')
    expect(normalizeRubyPosition('alternate under')).toBe('alternate under')
    expect(normalizeRubyPosition('inter-character')).toBe('inter-character')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeRubyPosition('inherit')).toBe('inherit')
    expect(normalizeRubyPosition('initial')).toBe('initial')
    expect(normalizeRubyPosition('revert')).toBe('revert')
    expect(normalizeRubyPosition('revert-layer')).toBe('revert-layer')
    expect(normalizeRubyPosition('unset')).toBe('unset')
  })
})
