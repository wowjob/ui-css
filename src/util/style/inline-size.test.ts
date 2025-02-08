import { describe, expect, test } from 'bun:test'
import { normalizeInlineSize } from './inline-size'

describe('normalizeInlineSize', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeInlineSize(null as any)).toBe('auto')
    expect(normalizeInlineSize(undefined as any)).toBe('auto')
    expect(normalizeInlineSize('auto')).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeInlineSize('max-content')).toBe('max-content')
    expect(normalizeInlineSize('min-content')).toBe('min-content')
    expect(normalizeInlineSize('fit-content')).toBe('fit-content')
  })

  test('should handle fit-content with parameters', () => {
    expect(normalizeInlineSize('fit-content(20em)')).toBe('fit-content(20em)')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeInlineSize('75%')).toBe('75%')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeInlineSize('300px')).toBe('18.75rem')
    expect(normalizeInlineSize(300)).toBe('18.75rem')
  })

  test('should handle anchor-size values as-is', () => {
    expect(normalizeInlineSize('anchor-size(width)')).toBe('anchor-size(width)')
    expect(normalizeInlineSize('anchor-size(--myAnchor inline)')).toBe(
      'anchor-size(--myAnchor inline)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeInlineSize('inherit')).toBe('inherit')
    expect(normalizeInlineSize('initial')).toBe('initial')
    expect(normalizeInlineSize('revert')).toBe('revert')
    expect(normalizeInlineSize('revert-layer')).toBe('revert-layer')
    expect(normalizeInlineSize('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {
    expect(normalizeInlineSize('')).toBe('auto')
    expect(normalizeInlineSize('invalid-value')).toBe('invalid-value')
  })
})
