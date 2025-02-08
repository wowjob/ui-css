import { describe, expect, test } from 'bun:test'
import { normalizeMaxHeight } from './max-height'

describe('normalizeMaxHeight', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeMaxHeight(null as any)).toBe('none')
    expect(normalizeMaxHeight(undefined as any)).toBe('none')
    expect(normalizeMaxHeight('none')).toBe('none')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeMaxHeight('max-content')).toBe('max-content')
    expect(normalizeMaxHeight('min-content')).toBe('min-content')
    expect(normalizeMaxHeight('fit-content')).toBe('fit-content')
    expect(normalizeMaxHeight('fit-content(20em)')).toBe('fit-content(20em)')
    expect(normalizeMaxHeight('stretch')).toBe('stretch')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeMaxHeight('3.5em')).toBe('3.5em')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeMaxHeight('75%')).toBe('75%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeMaxHeight('anchor-size(height)')).toBe(
      'anchor-size(height)'
    )
    expect(
      normalizeMaxHeight(
        'calc(anchor-size(--myAnchor self-block, 250px) + 2em)'
      )
    ).toBe('calc(anchor-size(--myAnchor self-block, 250px) + 2em)')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMaxHeight('inherit')).toBe('inherit')
    expect(normalizeMaxHeight('initial')).toBe('initial')
    expect(normalizeMaxHeight('revert')).toBe('revert')
    expect(normalizeMaxHeight('revert-layer')).toBe('revert-layer')
    expect(normalizeMaxHeight('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {})
})
