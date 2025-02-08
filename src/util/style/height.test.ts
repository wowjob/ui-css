import { describe, expect, test } from 'bun:test'
import { normalizeHeight } from './height'

describe('normalizeHeight', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeHeight(null as any)).toBe('auto')
    expect(normalizeHeight(undefined as any)).toBe('auto')
    expect(normalizeHeight('auto')).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeHeight('max-content')).toBe('max-content')
    expect(normalizeHeight('min-content')).toBe('min-content')
    expect(normalizeHeight('fit-content')).toBe('fit-content')
    expect(normalizeHeight('stretch')).toBe('stretch')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeHeight('120px')).toBe('7.5rem')
    expect(normalizeHeight(120)).toBe('7.5rem')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeHeight('75%')).toBe('75%')
  })

  test('should return values with other length units as-is', () => {
    expect(normalizeHeight('10em')).toBe('10em')
    expect(normalizeHeight('5rem')).toBe('5rem')
    expect(normalizeHeight('100vh')).toBe('100vh')
    expect(normalizeHeight('100vw')).toBe('100vw')
    expect(normalizeHeight('3vmin')).toBe('3vmin')
    expect(normalizeHeight('5vmax')).toBe('5vmax')
    expect(normalizeHeight('2cm')).toBe('2cm')
    expect(normalizeHeight('5mm')).toBe('5mm')
    expect(normalizeHeight('1in')).toBe('1in')
    expect(normalizeHeight('10pt')).toBe('10pt')
    expect(normalizeHeight('8pc')).toBe('8pc')
  })

  test('should return custom function values as-is', () => {
    expect(normalizeHeight('anchor-size(height)')).toBe('anchor-size(height)')
    expect(normalizeHeight('anchor-size(--myAnchor self-block, 250px)')).toBe(
      'anchor-size(--myAnchor self-block, 250px)'
    )
    expect(normalizeHeight('clamp(200px, anchor-size(width))')).toBe(
      'clamp(200px, anchor-size(width))'
    )
    expect(normalizeHeight('minmax(min-content, anchor-size(width))')).toBe(
      'minmax(min-content, anchor-size(width))'
    )
  })

  test('should handle fit-content with parameters', () => {
    expect(normalizeHeight('fit-content(20em)')).toBe('fit-content(20em)')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeHeight('inherit')).toBe('inherit')
    expect(normalizeHeight('initial')).toBe('initial')
    expect(normalizeHeight('revert')).toBe('revert')
    expect(normalizeHeight('revert-layer')).toBe('revert-layer')
    expect(normalizeHeight('unset')).toBe('unset')
  })

  test('should handle edge cases for invalid inputs gracefully', () => {
    expect(normalizeHeight('invalid-value')).toBe('invalid-value')
    expect(normalizeHeight('500lightyears')).toBe('500lightyears')
  })
})
