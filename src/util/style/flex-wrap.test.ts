import { describe, expect, test } from 'bun:test'
import { normalizeFlexWrap } from './flex-wrap'

describe('normalizeFlexWrap', () => {
  test('should return valid flex-wrap values', () => {
    expect(normalizeFlexWrap('nowrap')).toBe('nowrap')
    expect(normalizeFlexWrap('wrap')).toBe('wrap')
    expect(normalizeFlexWrap('wrap-reverse')).toBe('wrap-reverse')
  })

  test('should handle invalid or missing values gracefully', () => {
    expect(normalizeFlexWrap(undefined as any)).toBe('nowrap')
    expect(normalizeFlexWrap(null as any)).toBe('nowrap')
  })

  test('should handle global keywords', () => {
    expect(normalizeFlexWrap('inherit')).toBe('inherit')
    expect(normalizeFlexWrap('initial')).toBe('initial')
    expect(normalizeFlexWrap('unset')).toBe('unset')
  })
})
