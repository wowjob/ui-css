import { describe, expect, test } from 'bun:test'
import { normalizePerspective } from './perspective'

describe('normalizePerspective', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizePerspective(null as any)).toBe('none')
    expect(normalizePerspective(undefined as any)).toBe('none')
    expect(normalizePerspective('none')).toBe('none')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizePerspective('20px')).toBe('1.25rem')
  })

  test('should handle em values as-is', () => {
    expect(normalizePerspective('3.5em')).toBe('3.5em')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizePerspective('inherit')).toBe('inherit')
    expect(normalizePerspective('initial')).toBe('initial')
    expect(normalizePerspective('revert')).toBe('revert')
    expect(normalizePerspective('revert-layer')).toBe('revert-layer')
    expect(normalizePerspective('unset')).toBe('unset')
  })
})
