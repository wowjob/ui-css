import { describe, expect, test } from 'bun:test'
import { normalizeMinInlineSize } from './min-inline-size'

describe('normalizeMinInlineSize', () => {
  test('should return "min-content" for null or undefined', () => {
    expect(normalizeMinInlineSize(null as any)).toBe('min-content')
    expect(normalizeMinInlineSize(undefined as any)).toBe('min-content')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeMinInlineSize('max-content')).toBe('max-content')
    expect(normalizeMinInlineSize('min-content')).toBe('min-content')
    expect(normalizeMinInlineSize('fit-content')).toBe('fit-content')
    expect(normalizeMinInlineSize('fit-content(20em)')).toBe(
      'fit-content(20em)'
    )
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeMinInlineSize('100px')).toBe('6.25rem')
    expect(normalizeMinInlineSize(100)).toBe('6.25rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeMinInlineSize('10%')).toBe('10%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeMinInlineSize('anchor-size(width)')).toBe(
      'anchor-size(width)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMinInlineSize('inherit')).toBe('inherit')
    expect(normalizeMinInlineSize('initial')).toBe('initial')
    expect(normalizeMinInlineSize('revert')).toBe('revert')
    expect(normalizeMinInlineSize('revert-layer')).toBe('revert-layer')
    expect(normalizeMinInlineSize('unset')).toBe('unset')
  })
})
