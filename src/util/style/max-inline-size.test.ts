import { describe, expect, test } from 'bun:test'
import { normalizeMaxInlineSize } from './max-inline-size'

describe('normalizeMaxInlineSize', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeMaxInlineSize(null as any)).toBe('none')
    expect(normalizeMaxInlineSize(undefined as any)).toBe('none')
    expect(normalizeMaxInlineSize('none')).toBe('none')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeMaxInlineSize('max-content')).toBe('max-content')
    expect(normalizeMaxInlineSize('min-content')).toBe('min-content')
    expect(normalizeMaxInlineSize('fit-content')).toBe('fit-content')
    expect(normalizeMaxInlineSize('fit-content(20em)')).toBe(
      'fit-content(20em)'
    )
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeMaxInlineSize('300px')).toBe('18.75rem')
    expect(normalizeMaxInlineSize(300)).toBe('18.75rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeMaxInlineSize('75%')).toBe('75%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeMaxInlineSize('anchor-size(width)')).toBe(
      'anchor-size(width)'
    )
    expect(
      normalizeMaxInlineSize('anchor-size(--myAnchor self-block, 200px)')
    ).toBe('anchor-size(--myAnchor self-block, 200px)')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMaxInlineSize('inherit')).toBe('inherit')
    expect(normalizeMaxInlineSize('initial')).toBe('initial')
    expect(normalizeMaxInlineSize('revert')).toBe('revert')
    expect(normalizeMaxInlineSize('revert-layer')).toBe('revert-layer')
    expect(normalizeMaxInlineSize('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {})
})
