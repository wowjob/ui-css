import { describe, expect, test } from 'bun:test'
import { normalizeTextUnderlineOffset } from './text-underline-offset'

describe('normalizeTextUnderlineOffset', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeTextUnderlineOffset(null as any)).toBe('auto')
    expect(normalizeTextUnderlineOffset(undefined as any)).toBe('auto')
    expect(normalizeTextUnderlineOffset('auto')).toBe('auto')
  })

  test('should convert px values to rem', () => {
    expect(normalizeTextUnderlineOffset('3px')).toBe('0.1875rem') // Assuming 16px base font size
    expect(normalizeTextUnderlineOffset(16)).toBe('1rem')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeTextUnderlineOffset('20%')).toBe('20%')
  })

  test('should handle length values as-is', () => {
    expect(normalizeTextUnderlineOffset('0.1em')).toBe('0.1em')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextUnderlineOffset('inherit')).toBe('inherit')
    expect(normalizeTextUnderlineOffset('initial')).toBe('initial')
    expect(normalizeTextUnderlineOffset('revert')).toBe('revert')
    expect(normalizeTextUnderlineOffset('revert-layer')).toBe('revert-layer')
    expect(normalizeTextUnderlineOffset('unset')).toBe('unset')
  })
})
