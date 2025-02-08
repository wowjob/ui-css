import { describe, expect, test } from 'bun:test'
import { normalizeMaxWidth } from './max-width'

describe('normalizeMaxWidth', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeMaxWidth(null as any)).toBe('none')
    expect(normalizeMaxWidth(undefined as any)).toBe('none')
    expect(normalizeMaxWidth('none')).toBe('none')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeMaxWidth('max-content')).toBe('max-content')
    expect(normalizeMaxWidth('min-content')).toBe('min-content')
    expect(normalizeMaxWidth('fit-content')).toBe('fit-content')
    expect(normalizeMaxWidth('fit-content(20em)')).toBe('fit-content(20em)')
    expect(normalizeMaxWidth('stretch')).toBe('stretch')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeMaxWidth('3.5em')).toBe('3.5em')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeMaxWidth('75%')).toBe('75%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeMaxWidth('anchor-size(--myAnchor inline, 245px)')).toBe(
      'anchor-size(--myAnchor inline, 245px)'
    )
    expect(normalizeMaxWidth('calc(anchor-size(width) + 4em)')).toBe(
      'calc(anchor-size(width) + 4em)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMaxWidth('inherit')).toBe('inherit')
    expect(normalizeMaxWidth('initial')).toBe('initial')
    expect(normalizeMaxWidth('revert')).toBe('revert')
    expect(normalizeMaxWidth('revert-layer')).toBe('revert-layer')
    expect(normalizeMaxWidth('unset')).toBe('unset')
  })
})
