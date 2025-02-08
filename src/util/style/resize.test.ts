import { describe, expect, test } from 'bun:test'
import { normalizeResize } from './resize'

describe('normalizeResize', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeResize(null as any)).toBe('none')
    expect(normalizeResize(undefined as any)).toBe('none')
    expect(normalizeResize('none')).toBe('none')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeResize('both')).toBe('both')
    expect(normalizeResize('horizontal')).toBe('horizontal')
    expect(normalizeResize('vertical')).toBe('vertical')
    expect(normalizeResize('block')).toBe('block')
    expect(normalizeResize('inline')).toBe('inline')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeResize('inherit')).toBe('inherit')
    expect(normalizeResize('initial')).toBe('initial')
    expect(normalizeResize('revert')).toBe('revert')
    expect(normalizeResize('revert-layer')).toBe('revert-layer')
    expect(normalizeResize('unset')).toBe('unset')
  })
})
