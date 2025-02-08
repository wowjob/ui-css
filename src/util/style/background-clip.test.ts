import { describe, expect, test } from 'bun:test'
import { normalizeBackgroundClip } from './background-clip'

describe('normalizeBackgroundClip', () => {
  test('should return valid keyword values as-is', () => {
    expect(normalizeBackgroundClip('border-box')).toBe('border-box')
    expect(normalizeBackgroundClip('padding-box')).toBe('padding-box')
    expect(normalizeBackgroundClip('content-box')).toBe('content-box')
    expect(normalizeBackgroundClip('text')).toBe('text')
    expect(normalizeBackgroundClip('border-area')).toBe('border-area')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeBackgroundClip('inherit')).toBe('inherit')
    expect(normalizeBackgroundClip('initial')).toBe('initial')
    expect(normalizeBackgroundClip('revert')).toBe('revert')
    expect(normalizeBackgroundClip('revert-layer')).toBe('revert-layer')
    expect(normalizeBackgroundClip('unset')).toBe('unset')
  })

  test('should return "border-box" for null or undefined', () => {
    expect(normalizeBackgroundClip(undefined as any)).toBe('border-box')
    expect(normalizeBackgroundClip(null as any)).toBe('border-box')
  })
})
