import { describe, expect, test } from 'bun:test'
import { normalizeClip } from './clip'

describe('normalizeClip', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeClip(null as any)).toBe('auto')
    expect(normalizeClip(undefined as any)).toBe('auto')
  })

  test('should return the "auto" keyword as-is', () => {
    expect(normalizeClip('auto')).toBe('auto')
  })

  test('should return valid <shape> values as-is', () => {
    expect(normalizeClip('rect(1px, 10em, 3rem, 2ch)')).toBe(
      'rect(1px, 10em, 3rem, 2ch)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeClip('inherit')).toBe('inherit')
    expect(normalizeClip('initial')).toBe('initial')
    expect(normalizeClip('revert')).toBe('revert')
    expect(normalizeClip('revert-layer')).toBe('revert-layer')
    expect(normalizeClip('unset')).toBe('unset')
  })
})
