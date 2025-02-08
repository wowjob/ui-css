import { describe, expect, test } from 'bun:test'
import { normalizeBackdropFilter } from './backdrop-filter'

describe('normalizeBackdropFilter', () => {
  test('should return "none" as-is', () => {
    expect(normalizeBackdropFilter('none')).toBe('none')
  })

  test('should return URL values as-is', () => {
    expect(normalizeBackdropFilter('url(common-filters.svg#filter)')).toBe(
      'url(common-filters.svg#filter)'
    )
  })

  test('should return valid <filter-function> values as-is', () => {
    expect(normalizeBackdropFilter('blur(2px)')).toBe('blur(2px)')
    expect(normalizeBackdropFilter('brightness(60%)')).toBe('brightness(60%)')
    expect(normalizeBackdropFilter('contrast(40%)')).toBe('contrast(40%)')
    expect(normalizeBackdropFilter('drop-shadow(4px 4px 10px blue)')).toBe(
      'drop-shadow(4px 4px 10px blue)'
    )
    expect(normalizeBackdropFilter('grayscale(30%)')).toBe('grayscale(30%)')
    expect(normalizeBackdropFilter('hue-rotate(120deg)')).toBe(
      'hue-rotate(120deg)'
    )
    expect(normalizeBackdropFilter('invert(70%)')).toBe('invert(70%)')
    expect(normalizeBackdropFilter('opacity(20%)')).toBe('opacity(20%)')
    expect(normalizeBackdropFilter('sepia(90%)')).toBe('sepia(90%)')
    expect(normalizeBackdropFilter('saturate(80%)')).toBe('saturate(80%)')
  })

  test('should return combined filter values as-is', () => {
    expect(normalizeBackdropFilter('blur(4px) saturate(150%)')).toBe(
      'blur(4px) saturate(150%)'
    )
    expect(
      normalizeBackdropFilter(
        'url(filters.svg#filter) blur(4px) saturate(150%)'
      )
    ).toBe('url(filters.svg#filter) blur(4px) saturate(150%)')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeBackdropFilter('inherit')).toBe('inherit')
    expect(normalizeBackdropFilter('initial')).toBe('initial')
    expect(normalizeBackdropFilter('revert')).toBe('revert')
    expect(normalizeBackdropFilter('revert-layer')).toBe('revert-layer')
    expect(normalizeBackdropFilter('unset')).toBe('unset')
  })

  test('should return "none" for null or undefined', () => {
    expect(normalizeBackdropFilter(undefined as any)).toBe('none')
    expect(normalizeBackdropFilter(null as any)).toBe('none')
  })
})
