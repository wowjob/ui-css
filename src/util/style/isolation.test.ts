import { describe, expect, test } from 'bun:test'
import { normalizeIsolation } from './isolation'

describe('normalizeIsolation', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeIsolation(null as any)).toBe('auto')
    expect(normalizeIsolation(undefined as any)).toBe('auto')
    expect(normalizeIsolation('auto')).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeIsolation('isolate')).toBe('isolate')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeIsolation('inherit')).toBe('inherit')
    expect(normalizeIsolation('initial')).toBe('initial')
    expect(normalizeIsolation('revert')).toBe('revert')
    expect(normalizeIsolation('revert-layer')).toBe('revert-layer')
    expect(normalizeIsolation('unset')).toBe('unset')
  })
})
