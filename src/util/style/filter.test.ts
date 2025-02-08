import { describe, expect, test } from 'bun:test'
import { normalizeFilter } from './filter'

describe('normalizeFilter', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeFilter(null as any)).toBe('none')
    expect(normalizeFilter(undefined as any)).toBe('none')
  })

  test('should return valid <filter-function> values as-is', () => {
    expect(normalizeFilter('blur(5px)')).toBe('blur(5px)')
    expect(normalizeFilter('brightness(0.4)')).toBe('brightness(0.4)')
    expect(normalizeFilter('contrast(200%)')).toBe('contrast(200%)')
    expect(normalizeFilter('drop-shadow(16px 16px 20px blue)')).toBe(
      'drop-shadow(16px 16px 20px blue)'
    )
    expect(normalizeFilter('grayscale(50%)')).toBe('grayscale(50%)')
    expect(normalizeFilter('hue-rotate(90deg)')).toBe('hue-rotate(90deg)')
    expect(normalizeFilter('invert(75%)')).toBe('invert(75%)')
    expect(normalizeFilter('opacity(25%)')).toBe('opacity(25%)')
    expect(normalizeFilter('saturate(30%)')).toBe('saturate(30%)')
    expect(normalizeFilter('sepia(60%)')).toBe('sepia(60%)')
  })

  test('should return <url> values as-is', () => {
    expect(normalizeFilter('url("filters.svg#filter-id")')).toBe(
      'url("filters.svg#filter-id")'
    )
  })

  test('should return multiple filters as-is', () => {
    expect(normalizeFilter('contrast(175%) brightness(3%)')).toBe(
      'contrast(175%) brightness(3%)'
    )
    expect(
      normalizeFilter(
        'drop-shadow(3px 3px red) sepia(100%) drop-shadow(-3px -3px blue)'
      )
    ).toBe('drop-shadow(3px 3px red) sepia(100%) drop-shadow(-3px -3px blue)')
  })

  test('should return "none" keyword value as-is', () => {
    expect(normalizeFilter('none')).toBe('none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFilter('inherit')).toBe('inherit')
    expect(normalizeFilter('initial')).toBe('initial')
    expect(normalizeFilter('revert')).toBe('revert')
    expect(normalizeFilter('revert-layer')).toBe('revert-layer')
    expect(normalizeFilter('unset')).toBe('unset')
  })
})
