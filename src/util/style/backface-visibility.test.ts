import { describe, expect, test } from 'bun:test'
import { normalizeBackfaceVisibility } from './backface-visibility'

describe('normalizeBackfaceVisibility', () => {
  test('should return "visible" as-is', () => {
    expect(normalizeBackfaceVisibility('visible')).toBe('visible')
  })

  test('should return "hidden" as-is', () => {
    expect(normalizeBackfaceVisibility('hidden')).toBe('hidden')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeBackfaceVisibility('inherit')).toBe('inherit')
    expect(normalizeBackfaceVisibility('initial')).toBe('initial')
    expect(normalizeBackfaceVisibility('revert')).toBe('revert')
    expect(normalizeBackfaceVisibility('revert-layer')).toBe('revert-layer')
    expect(normalizeBackfaceVisibility('unset')).toBe('unset')
  })

  test('should return "visible" for null or undefined', () => {
    expect(normalizeBackfaceVisibility(undefined as any)).toBe('visible')
    expect(normalizeBackfaceVisibility(null as any)).toBe('visible')
  })
})
