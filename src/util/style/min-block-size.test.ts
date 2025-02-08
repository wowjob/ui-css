import { describe, expect, test } from 'bun:test'
import { normalizeMinBlockSize } from './min-block-size'

describe('normalizeMinBlockSize', () => {
  test('should return "min-content" for null or undefined', () => {
    expect(normalizeMinBlockSize(null as any)).toBe('min-content')
    expect(normalizeMinBlockSize(undefined as any)).toBe('min-content')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeMinBlockSize('max-content')).toBe('max-content')
    expect(normalizeMinBlockSize('min-content')).toBe('min-content')
    expect(normalizeMinBlockSize('fit-content')).toBe('fit-content')
    expect(normalizeMinBlockSize('fit-content(20em)')).toBe('fit-content(20em)')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeMinBlockSize('100px')).toBe('6.25rem')
    expect(normalizeMinBlockSize(100)).toBe('6.25rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeMinBlockSize('10%')).toBe('10%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeMinBlockSize('anchor-size(self-inline)')).toBe(
      'anchor-size(self-inline)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMinBlockSize('inherit')).toBe('inherit')
    expect(normalizeMinBlockSize('initial')).toBe('initial')
    expect(normalizeMinBlockSize('revert')).toBe('revert')
    expect(normalizeMinBlockSize('revert-layer')).toBe('revert-layer')
    expect(normalizeMinBlockSize('unset')).toBe('unset')
  })
})
