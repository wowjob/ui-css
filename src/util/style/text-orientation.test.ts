import { describe, expect, test } from 'bun:test'
import { normalizeTextOrientation } from './text-orientation'

describe('normalizeTextOrientation', () => {
  test('should return "mixed" for null or undefined', () => {
    expect(normalizeTextOrientation(null as any)).toBe('mixed')
    expect(normalizeTextOrientation(undefined as any)).toBe('mixed')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTextOrientation('mixed')).toBe('mixed')
    expect(normalizeTextOrientation('upright')).toBe('upright')
    expect(normalizeTextOrientation('sideways-right')).toBe('sideways-right')
    expect(normalizeTextOrientation('sideways')).toBe('sideways')
    expect(normalizeTextOrientation('use-glyph-orientation')).toBe(
      'use-glyph-orientation'
    )
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextOrientation('inherit')).toBe('inherit')
    expect(normalizeTextOrientation('initial')).toBe('initial')
    expect(normalizeTextOrientation('revert')).toBe('revert')
    expect(normalizeTextOrientation('revert-layer')).toBe('revert-layer')
    expect(normalizeTextOrientation('unset')).toBe('unset')
  })
})
