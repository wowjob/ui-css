import { describe, expect, test } from 'bun:test'
import { normalizeMaxBlockSize } from './max-block-size'

describe('normalizeMaxBlockSize', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeMaxBlockSize(null as any)).toBe('none')
    expect(normalizeMaxBlockSize(undefined as any)).toBe('none')
    expect(normalizeMaxBlockSize('none')).toBe('none')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeMaxBlockSize('max-content')).toBe('max-content')
    expect(normalizeMaxBlockSize('min-content')).toBe('min-content')
    expect(normalizeMaxBlockSize('fit-content')).toBe('fit-content')
    expect(normalizeMaxBlockSize('fit-content(20em)')).toBe('fit-content(20em)')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeMaxBlockSize('300px')).toBe('18.75rem')
    expect(normalizeMaxBlockSize(300)).toBe('18.75rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeMaxBlockSize('75%')).toBe('75%')
  })

  test('should handle custom functions as-is', () => {
    expect(
      normalizeMaxBlockSize('anchor-size(--myAnchor self-inline, 250px)')
    ).toBe('anchor-size(--myAnchor self-inline, 250px)')
    expect(normalizeMaxBlockSize('calc(anchor-size(width) / 2)')).toBe(
      'calc(anchor-size(width) / 2)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMaxBlockSize('inherit')).toBe('inherit')
    expect(normalizeMaxBlockSize('initial')).toBe('initial')
    expect(normalizeMaxBlockSize('revert')).toBe('revert')
    expect(normalizeMaxBlockSize('revert-layer')).toBe('revert-layer')
    expect(normalizeMaxBlockSize('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {})
})
