import { describe, expect, test } from 'bun:test'
import { normalizeRubyAlign } from './ruby-align'

describe('normalizeRubyAlign', () => {
  test('should return valid ruby-align values as-is', () => {
    expect(normalizeRubyAlign('start')).toBe('start')
    expect(normalizeRubyAlign('center')).toBe('center')
    expect(normalizeRubyAlign('space-between')).toBe('space-between')
    expect(normalizeRubyAlign('space-around')).toBe('space-around')
    expect(normalizeRubyAlign('inherit')).toBe('inherit')
    expect(normalizeRubyAlign('initial')).toBe('initial')
    expect(normalizeRubyAlign('revert')).toBe('revert')
    expect(normalizeRubyAlign('revert-layer')).toBe('revert-layer')
    expect(normalizeRubyAlign('unset')).toBe('unset')
  })

  test('should return null for invalid ruby-align values', () => {
    expect(normalizeRubyAlign('')).toBe('initial')
    expect(normalizeRubyAlign(null as any)).toBe('initial')
    expect(normalizeRubyAlign(undefined as any)).toBe('initial')
  })
})
