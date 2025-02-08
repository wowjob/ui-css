import { describe, expect, test } from 'bun:test'
import { normalizeHyphens } from './hyphens'

describe('normalizeHyphens', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeHyphens(null as any)).toBe('none')
    expect(normalizeHyphens(undefined as any)).toBe('none')
    expect(normalizeHyphens('none')).toBe('none')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeHyphens('manual')).toBe('manual')
    expect(normalizeHyphens('auto')).toBe('auto')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeHyphens('inherit')).toBe('inherit')
    expect(normalizeHyphens('initial')).toBe('initial')
    expect(normalizeHyphens('revert')).toBe('revert')
    expect(normalizeHyphens('revert-layer')).toBe('revert-layer')
    expect(normalizeHyphens('unset')).toBe('unset')
  })
})
