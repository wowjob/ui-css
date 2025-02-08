import { describe, expect, test } from 'bun:test'
import { normalizeOffset } from './offset'

describe('normalizeOffset', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeOffset(null as any)).toBe('none')
    expect(normalizeOffset(undefined as any)).toBe('none')
  })

  test('should return string values as-is', () => {
    expect(normalizeOffset('url(#myCircle)')).toBe('url(#myCircle)')
    expect(normalizeOffset('ray(45deg)')).toBe('ray(45deg)')
  })

  test('should handle arrays with valid values only', () => {
    expect(
      normalizeOffset(['url(#myCircle)', 'ray(45deg)', '', undefined])
    ).toBe('url(#myCircle) ray(45deg)')
  })

  test('should handle objects with multiple properties', () => {
    expect(
      normalizeOffset({
        path: 'ray(45deg)',
        distance: '50%',
        rotate: 'auto 45deg',
      })
    ).toBe('ray(45deg) 50% auto 45deg')

    expect(
      normalizeOffset({
        path: 'circle(50% at 25% 25%)',
        rotate: 'reverse',
      })
    ).toBe('circle(50% at 25% 25%) reverse')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeOffset('inherit')).toBe('inherit')
    expect(normalizeOffset('initial')).toBe('initial')
    expect(normalizeOffset('revert')).toBe('revert')
    expect(normalizeOffset('revert-layer')).toBe('revert-layer')
    expect(normalizeOffset('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {
    expect(normalizeOffset('')).toBe('none')
    expect(normalizeOffset('invalid-value')).toBe('invalid-value')
  })
})
