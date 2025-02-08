import { describe, expect, test } from 'bun:test'
import { normalizeMaskClip } from './mask-clip'

describe('normalizeMaskClip', () => {
  test('should return "content-box" for null or undefined', () => {
    expect(normalizeMaskClip(null as any)).toBe('content-box')
    expect(normalizeMaskClip(undefined as any)).toBe('content-box')
  })

  test('should return single keyword values as-is', () => {
    expect(normalizeMaskClip('content-box')).toBe('content-box')
    expect(normalizeMaskClip('padding-box')).toBe('padding-box')
    expect(normalizeMaskClip('no-clip')).toBe('no-clip')
  })

  test('should return non-standard values as-is', () => {
    expect(normalizeMaskClip('-webkit-mask-clip')).toBe('-webkit-mask-clip')
    expect(normalizeMaskClip('border')).toBe('border')
    expect(normalizeMaskClip('text')).toBe('text')
  })

  test('should handle multiple values', () => {
    expect(normalizeMaskClip(['padding-box', 'no-clip'])).toBe(
      'padding-box, no-clip'
    )
    expect(normalizeMaskClip(['view-box', 'fill-box', 'border-box'])).toBe(
      'view-box, fill-box, border-box'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMaskClip('inherit')).toBe('inherit')
    expect(normalizeMaskClip('initial')).toBe('initial')
    expect(normalizeMaskClip('revert')).toBe('revert')
    expect(normalizeMaskClip('revert-layer')).toBe('revert-layer')
    expect(normalizeMaskClip('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {})
})
