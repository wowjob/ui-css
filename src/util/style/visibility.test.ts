import { describe, expect, test } from 'bun:test'
import { normalizeVisibility } from './visibility'

describe('normalizeVisibility', () => {
  test('should return "visible" for null or undefined', () => {
    expect(normalizeVisibility(null as any)).toBe('visible')
    expect(normalizeVisibility(undefined as any)).toBe('visible')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeVisibility('visible')).toBe('visible')
    expect(normalizeVisibility('hidden')).toBe('hidden')
    expect(normalizeVisibility('collapse')).toBe('collapse')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeVisibility('inherit')).toBe('inherit')
    expect(normalizeVisibility('initial')).toBe('initial')
    expect(normalizeVisibility('revert')).toBe('revert')
    expect(normalizeVisibility('revert-layer')).toBe('revert-layer')
    expect(normalizeVisibility('unset')).toBe('unset')
  })
})
