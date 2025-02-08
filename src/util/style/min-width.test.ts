import { describe, expect, test } from 'bun:test'
import { normalizeMinWidth } from './min-width'

describe('normalizeMinWidth', () => {
  test('should return "min-content" for null or undefined', () => {
    expect(normalizeMinWidth(null as any)).toBe('min-content')
    expect(normalizeMinWidth(undefined as any)).toBe('min-content')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeMinWidth('max-content')).toBe('max-content')
    expect(normalizeMinWidth('min-content')).toBe('min-content')
    expect(normalizeMinWidth('fit-content')).toBe('fit-content')
    expect(normalizeMinWidth('fit-content(20em)')).toBe('fit-content(20em)')
    expect(normalizeMinWidth('stretch')).toBe('stretch')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeMinWidth('3.5em')).toBe('3.5em')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeMinWidth('10%')).toBe('10%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeMinWidth('anchor-size(width)')).toBe('anchor-size(width)')
    expect(normalizeMinWidth('anchor-size(--myAnchor self-inline, 200%)')).toBe(
      'anchor-size(--myAnchor self-inline, 200%)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMinWidth('inherit')).toBe('inherit')
    expect(normalizeMinWidth('initial')).toBe('initial')
    expect(normalizeMinWidth('revert')).toBe('revert')
    expect(normalizeMinWidth('revert-layer')).toBe('revert-layer')
    expect(normalizeMinWidth('unset')).toBe('unset')
  })
})
