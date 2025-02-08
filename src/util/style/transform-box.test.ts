import { describe, expect, test } from 'bun:test'
import { normalizeTransformBox } from './transform-box'

describe('normalizeTransformBox', () => {
  test('should return "content-box" for null or undefined', () => {
    expect(normalizeTransformBox(null as any)).toBe('content-box')
    expect(normalizeTransformBox(undefined as any)).toBe('content-box')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTransformBox('content-box')).toBe('content-box')
    expect(normalizeTransformBox('border-box')).toBe('border-box')
    expect(normalizeTransformBox('fill-box')).toBe('fill-box')
    expect(normalizeTransformBox('stroke-box')).toBe('stroke-box')
    expect(normalizeTransformBox('view-box')).toBe('view-box')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTransformBox('inherit')).toBe('inherit')
    expect(normalizeTransformBox('initial')).toBe('initial')
    expect(normalizeTransformBox('revert')).toBe('revert')
    expect(normalizeTransformBox('revert-layer')).toBe('revert-layer')
    expect(normalizeTransformBox('unset')).toBe('unset')
  })
})
