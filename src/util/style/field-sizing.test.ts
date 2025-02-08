import { describe, expect, test } from 'bun:test'
import { normalizeFieldSizing } from './field-sizing'

describe('normalizeFieldSizing', () => {
  test('should return "content" for null or undefined', () => {
    expect(normalizeFieldSizing(null as any)).toBe('content')
    expect(normalizeFieldSizing(undefined as any)).toBe('content')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFieldSizing('content')).toBe('content')
    expect(normalizeFieldSizing('fixed')).toBe('fixed')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFieldSizing('inherit')).toBe('inherit')
    expect(normalizeFieldSizing('initial')).toBe('initial')
    expect(normalizeFieldSizing('revert')).toBe('revert')
    expect(normalizeFieldSizing('revert-layer')).toBe('revert-layer')
    expect(normalizeFieldSizing('unset')).toBe('unset')
  })
})
