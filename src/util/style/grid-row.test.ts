import { describe, expect, test } from 'bun:test'
import { normalizeGridRow } from './grid-row'

describe('normalizeGridRow', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeGridRow(null as any)).toBe('auto')
    expect(normalizeGridRow(undefined as any)).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeGridRow('auto')).toBe('auto')
    expect(normalizeGridRow('auto / auto')).toBe('auto / auto')
  })

  test('should return <custom-ident> values as-is', () => {
    expect(normalizeGridRow('some-grid-area')).toBe('some-grid-area')
    expect(normalizeGridRow('some-grid-area / some-other-grid-area')).toBe(
      'some-grid-area / some-other-grid-area'
    )
  })

  test('should handle <integer> + <custom-ident> combinations', () => {
    expect(normalizeGridRow('some-grid-area 4')).toBe('some-grid-area 4')
    expect(normalizeGridRow('4 some-grid-area / 6')).toBe(
      '4 some-grid-area / 6'
    )
  })

  test('should handle span combinations', () => {
    expect(normalizeGridRow('span 3')).toBe('span 3')
    expect(normalizeGridRow('span some-grid-area')).toBe('span some-grid-area')
    expect(normalizeGridRow('5 some-grid-area span')).toBe(
      '5 some-grid-area span'
    )
    expect(normalizeGridRow('span 3 / 6')).toBe('span 3 / 6')
    expect(
      normalizeGridRow('span some-grid-area / span some-other-grid-area')
    ).toBe('span some-grid-area / span some-other-grid-area')
    expect(normalizeGridRow('5 some-grid-area span / 2 span')).toBe(
      '5 some-grid-area span / 2 span'
    )
  })

  test('should handle arrays of values', () => {
    expect(normalizeGridRow(['span 3', '6'])).toBe('span 3 / 6')
    expect(
      normalizeGridRow(['span some-grid-area', 'span some-other-grid-area'])
    ).toBe('span some-grid-area / span some-other-grid-area')
  })

  test('should handle objects with start and end', () => {
    expect(normalizeGridRow({ start: 2, end: 'span 5' })).toBe('2 / span 5')
    expect(normalizeGridRow({ start: 'auto' })).toBe('auto / auto')
    expect(normalizeGridRow({ end: 'span 3' })).toBe('auto / span 3')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeGridRow('inherit')).toBe('inherit')
    expect(normalizeGridRow('initial')).toBe('initial')
    expect(normalizeGridRow('revert')).toBe('revert')
    expect(normalizeGridRow('revert-layer')).toBe('revert-layer')
    expect(normalizeGridRow('unset')).toBe('unset')
  })
})
