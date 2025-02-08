import { describe, expect, test } from 'bun:test'
import { normalizeMinHeight } from './min-height'

describe('normalizeMinHeight', () => {
  test('should return "min-content" for null or undefined', () => {
    expect(normalizeMinHeight(null as any)).toBe('min-content')
    expect(normalizeMinHeight(undefined as any)).toBe('min-content')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeMinHeight('max-content')).toBe('max-content')
    expect(normalizeMinHeight('min-content')).toBe('min-content')
    expect(normalizeMinHeight('fit-content')).toBe('fit-content')
    expect(normalizeMinHeight('fit-content(20em)')).toBe('fit-content(20em)')
    expect(normalizeMinHeight('stretch')).toBe('stretch')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeMinHeight('3.5em')).toBe('3.5em')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeMinHeight('10%')).toBe('10%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeMinHeight('anchor-size(height)')).toBe(
      'anchor-size(height)'
    )
    expect(normalizeMinHeight('anchor-size(--myAnchor block, 200px)')).toBe(
      'anchor-size(--myAnchor block, 200px)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMinHeight('inherit')).toBe('inherit')
    expect(normalizeMinHeight('initial')).toBe('initial')
    expect(normalizeMinHeight('revert')).toBe('revert')
    expect(normalizeMinHeight('revert-layer')).toBe('revert-layer')
    expect(normalizeMinHeight('unset')).toBe('unset')
  })
})
